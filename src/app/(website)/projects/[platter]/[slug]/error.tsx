"use client";

import ErrorState from "@/website/components/ui/ErrorState";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ProjectsError({ error, reset }: ErrorProps) {
  return (
    <ErrorState
      error={error}
      reset={reset}
      logPrefix="Projects page error:"
      title="Something went wrong!"
      description="We encountered an error while loading the projects. Please try again."
    />
  );
}
