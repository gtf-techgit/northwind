"use client";

import { useEffect, ReactNode } from "react";
import Button from "./Button";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

export interface ErrorStateProps {
  error?: Error & { digest?: string };
  reset?: () => void;
  title?: ReactNode;
  description?: ReactNode;
  buttonText?: ReactNode;
  className?: string;
  logPrefix?: string;
}

export default function ErrorState({
  error,
  reset,
  title = "Something went wrong!",
  description = "We encountered an unexpected error. Please try again.",
  buttonText = "Try Again",
  className = "",
  logPrefix = "Error caught:",
}: ErrorStateProps) {
  useEffect(() => {
    if (error) {
      console.error(logPrefix, error);
    }
  }, [error, logPrefix]);

  return (
    <div
      className={`min-h-[60vh] lg:min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-20 ${className}`}
    >
      <Heading as="h2" className="text-3xl font-heading text-primary mb-4">
        {title}
      </Heading>

      {description && (
        <Paragraph className="max-w-md mb-8 text-muted">
          {description}
        </Paragraph>
      )}

      {reset && (
        <Button variant="primary" onClick={reset}>
          {buttonText}
        </Button>
      )}
    </div>
  );
}
