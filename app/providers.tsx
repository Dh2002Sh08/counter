'use client';

import { TonConnectProvider } from '@/components/TonConnectProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TonConnectProvider>
        {children}
      </TonConnectProvider>
    </QueryClientProvider>
  );
} 