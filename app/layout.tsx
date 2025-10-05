// Esse pertence a app/layout.tsx
import { ChakraProviderWrapper } from '@/components/Layouts/ChakraProviderWrapper';

export default function RootLayout({ children }: { children: React.ReactNode; }) {
  return (
    <html lang="pt-BR">
      <body>
        <ChakraProviderWrapper>
          {children}
        </ChakraProviderWrapper>
      </body>
    </html>
  );
}