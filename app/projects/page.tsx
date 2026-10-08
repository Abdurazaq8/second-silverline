import { Suspense } from "react";
import { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Our Projects - Silverline Engineering",
  description: "Explore our portfolio of civil, electrical, mechanical, and solar engineering projects across Zambia.",
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProjectsClient />
    </Suspense>
  );
}
