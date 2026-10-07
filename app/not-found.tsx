"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-32 pb-20">
                <h1 className="text-9xl font-bold text-[var(--background)] mb-2 select-none">404</h1>
                <h2 className="text-3xl md:text-4xl font-medium text-[var(--heading)] mb-4">Page Not Found</h2>
                <p className="text-[var(--paragraphs)] max-w-lg mb-8 text-base">
                    The requested page could not be located or has been relocated.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--heading)] font-semibold uppercase tracking-[1.5px] text-[13px] rounded-none hover:opacity-90 transition-opacity no-underline shadow-sm"
                >
                    <MoveLeft size={18} />
                    Back to Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}
