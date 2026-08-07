import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectGridCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="absolute inset-0 bg-black/30 flex items-end justify-center p-6">
        <div className="text-white text-center">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="text-sm">{project.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}
