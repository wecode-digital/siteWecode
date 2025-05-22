import type { Metadata } from "next";
import "./globals.scss";
import Header from '@/components/Header/index'
import Footer from '@/components/Footer/index'

export const metadata: Metadata = {
  title: "Wecode Tecnologia para E-commerce",
  description: "Valorizamos pessoas e impulsionamos negócios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2PT8JM');
          `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        <Header></Header>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
