// Esse pertence a app/components/Layouts/ChakraProviderWrapper.tsx
'use client';

import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/styles/theme'; 

export function ChakraProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}