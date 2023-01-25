'use client';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import Script from 'next/script';

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
        {/* LEADSTER - START*/}
        <script
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `(function(n,r,l,d){try{var h=r.head||r.getElementsByTagName("head")[0],s=r.createElement("script");s.defer=true;s.setAttribute("type","text/javascript");s.setAttribute("src",l);n.neuroleadId=d;h.appendChild(s);}catch(e){}})(window,document,"https://cdn.leadster.com.br/neurolead/neurolead.min.js", 74703)`,
          }}
        ></script>
        {/* LEADSTER - END */}
        {/* GOOGLE TAG SCRIPT - START*/}
        <Script
          strategy="afterInteractive"
          id="inline-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KGF2D2G')`,
          }}
        ></Script>
        {/* GOOGLE TAG SCRIPT - END */}
        {/* GOOGLE TAG MANAGER - START */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=GTM-KGF2D2G`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* GOOGLE TAG MANAGER - END */}
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </body>
    </html>
  );
}
