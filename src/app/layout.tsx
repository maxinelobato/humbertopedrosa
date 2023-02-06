'use client';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import Script from 'next/script';
import { ButtonPhone } from './components/buttonphone';
import { ButtonWhatsApp } from './components/buttonwhatsapp';

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
      {/* Google Tag Manager - START */}
      <Script
        id="inline-script"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N2VX9SG');`,
        }}
      ></Script>
      {/* Google Tag Manager - END */}
      <head />
      <body>
        {/* GOOGLE TAG MANAGER - START */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-N2VX9SG`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* GOOGLE TAG MANAGER - END */}
        <ChakraProvider theme={theme} resetCSS>
          <ButtonWhatsApp />
          <ButtonPhone />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
