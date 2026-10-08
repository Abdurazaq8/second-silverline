import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us - Silverline Engineering",
    description: "Get in touch with Silverline Engineering for your construction and engineering needs in Zambia.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#07172B]">
            <Navbar />
            <div className="pt-24 sm:pt-28"> {/* Account for fixed navbar */}
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
