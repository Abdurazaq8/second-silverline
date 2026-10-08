const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function findImages(dir) {
  let results = [];
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      results = results.concat(findImages(full));
    } else if (/\.(jpe?g|png)$/i.test(f) && stat.size > 350 * 1024) {
      results.push(full);
    }
  }
  return results;
}

async function optimizeAll() {
  const images = findImages('public');
  console.log(`Found ${images.length} images larger than 350KB to optimize...`);

  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  for (const file of images) {
    const origSize = fs.statSync(file).size;
    totalOriginal += origSize;

    try {
      const ext = path.extname(file).toLowerCase();
      // Read into buffer first to prevent Windows file locking issues
      const inputBuffer = fs.readFileSync(file);
      
      let pipeline = sharp(inputBuffer).resize({
        width: 1920,
        height: 1920,
        fit: 'inside',
        withoutEnlargement: true,
      });

      let buf;
      if (ext === '.png') {
        buf = await pipeline.png({ compressionLevel: 9, quality: 85 }).toBuffer();
      } else {
        buf = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      }

      if (buf.length < origSize) {
        fs.writeFileSync(file, buf);
        totalOptimized += buf.length;
        count++;
        const savedPercent = (((origSize - buf.length) / origSize) * 100).toFixed(0);
        console.log(`[OK] ${path.relative('public', file)}: ${(origSize / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(0)}KB (-${savedPercent}%)`);
      } else {
        totalOptimized += origSize;
      }
    } catch (err) {
      totalOptimized += origSize;
      console.error(`[ERR] ${file}:`, err.message);
    }
  }

  const savedMB = ((totalOriginal - totalOptimized) / (1024 * 1024)).toFixed(2);
  const totalOrigMB = (totalOriginal / (1024 * 1024)).toFixed(2);
  const totalOptMB = (totalOptimized / (1024 * 1024)).toFixed(2);
  console.log(`\n========================================`);
  console.log(`Optimized ${count} images!`);
  console.log(`Total Original: ${totalOrigMB} MB`);
  console.log(`Total Optimized: ${totalOptMB} MB`);
  console.log(`Saved: ${savedMB} MB (${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}% reduction)`);
  console.log(`========================================\n`);
}

optimizeAll();
