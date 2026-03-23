'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[Error Boundary]', error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-4xl font-bold text-[#F1F5F9]">Something went wrong</h1>
      <p className="mt-4 text-[#94A3B8]">An unexpected error occurred. Please try again.</p>
      <Button variant="primary" size="md" onClick={reset} className="mt-8">
        Try Again
      </Button>
    </div>
  );
}
