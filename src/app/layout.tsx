'use client';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
// import Script from 'next/script';
import { ScrollCall } from './components/ScrollCall';
import { ScrollWhatsApp } from './components/ScrollWhatsApp';
// import './styles.css';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* GOOGLE TAG MANAGER - START */}
        {/* <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KGF2D2G`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript> */}
        {/* GOOGLE TAG MANAGER - END */}
        <ChakraProvider theme={theme} resetCSS>
          <ScrollWhatsApp />
          <ScrollCall />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
