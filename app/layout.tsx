import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Script from "next/script";
import GSAPScrollAnimations from "@/components/GSAPScrollAnimations";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://silverline-engineering.com"),
  title: "Silverline Engineering - Quality Construction & Engineering Services",
  description: "Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.",
  keywords: [
    "Construction Zambia",
    "Engineering Zambia",
    "Civil Engineering Lusaka",
    "Electrical Engineering Zambia",
    "Mechanical Engineering Copperbelt",
    "Solar Energy Zambia",
    "General Contractor Zambia",
    "Kitwe Engineering Company",
    "Commercial Building Construction",
    "Industrial Warehouses Zambia",
    "Silverline Engineering Limited"
  ],
  authors: [{ name: "Silverline Engineering Limited" }],
  creator: "Silverline Engineering Limited",
  publisher: "Silverline Engineering Limited",
  alternates: {
    canonical: "https://silverline-engineering.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Silverline Engineering - Quality Construction & Engineering Services",
    description: "Leading construction and engineering firm in Zambia delivering excellence in Civil, Electrical, Mechanical, and Solar Engineering.",
    url: "https://silverline-engineering.com",
    siteName: "Silverline Engineering",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silverline Engineering Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silverline Engineering",
    description: "Zambian owned Construction Company specializing in Civil, Electrical, Mechanical, and Solar Engineering services.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ConstructionBusiness", "GeneralContractor", "ProfessionalService"],
      "@id": "https://silverline-engineering.com/#organization",
      "name": "Silverline Engineering Limited",
      "legalName": "Silverline Engineering Limited",
      "url": "https://silverline-engineering.com",
      "logo": "https://silverline-engineering.com/silverline-logo.png",
      "image": "https://silverline-engineering.com/og-image.jpg",
      "description": "Leading Zambian engineering and construction company delivering excellence in Civil, Electrical, Mechanical, and Solar Engineering.",
      "email": "info@silverlineng.com",
      "telephone": ["+260966626579", "+260771814040", "+260977467664"],
      "priceRange": "$$",
      "currenciesAccepted": "ZMW, USD",
      "paymentAccepted": "Cash, Credit Card, Bank Transfer",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Zambia"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Lusaka Province"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Copperbelt Province"
        }
      ],
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Plot 397a/40/d Off Kafue Road, Makeni",
          "addressLocality": "Lusaka",
          "addressRegion": "Lusaka",
          "postalCode": "10101",
          "addressCountry": "ZM"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Stand No. 1204, Light Industrial Area",
          "addressLocality": "Kitwe",
          "addressRegion": "Copperbelt",
          "addressCountry": "ZM"
        }
      ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -15.416667,
        "longitude": 28.283333
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Engineering & Construction Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Civil & Structural Engineering",
              "description": "Reinforced concrete, structural steel framing, commercial retail buildings, industrial warehouses, earthworks, and drainage infrastructure."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Electrical Engineering",
              "description": "Substations, medium/low voltage power distribution, industrial wiring, panel building, and instrumentation."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mechanical Engineering",
              "description": "Industrial piping networks, HVAC ventilation systems, pumping stations, steel structure prefabrication, and plant maintenance."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Solar & Renewable Energy",
              "description": "Turnkey commercial and industrial rooftop solar, hybrid battery storage systems, and solar water pumping."
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/share/1KntzJukRd/?mibextid=wwXIfr",
        "https://www.instagram.com/silverline.eng_limited?stkn=aGtib2tuc2hvNW5w"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://silverline-engineering.com/#website",
      "url": "https://silverline-engineering.com",
      "name": "Silverline Engineering",
      "publisher": {
        "@id": "https://silverline-engineering.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EE0YHLNRNF"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-EE0YHLNRNF');
            `,
          }}
        />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GSAPScrollAnimations />
        {children}
      </body>
    </html>
  );
}
