'use client';

import { TonConnectUIProvider } from '@tonconnect/ui-react';
import { ReactNode } from 'react';

interface TonConnectProviderProps {
  children: ReactNode;
}

const manifestUrl =
  "https://coffee-peculiar-thrush-870.mypinata.cloud/ipfs/bafkreid5c2dw2zehfk26yqiquye6r77iaky7qb363ufnkbieh5ffloq774";

export function TonConnectProvider({ children }: TonConnectProviderProps) {
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      {children}
    </TonConnectUIProvider>
  );
} 