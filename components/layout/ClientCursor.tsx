'use client';

import dynamic from 'next/dynamic';

const CustomCursor = dynamic(
  () => import('@/components/layout/CustomCursor').then(m => m.CustomCursor),
  { ssr: false }
);

export function ClientCursor() {
  return <CustomCursor />;
}
