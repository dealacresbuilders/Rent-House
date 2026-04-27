import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { PropertyProvider } from "@/contextapi/propertycontext"; // ✅ ADD THIS
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { BlogProvider } from "@/contextapi/BlogContext";
import { Toaster } from "react-hot-toast";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
title: "Rent House in Faridabad | Affordable Independent Homes & Flats on Rent",

description:
"Find verified houses for rent in Faridabad. Explore affordable 2 BHK & 3 BHK independent houses, builder floors & apartments in Sector 82, 85, 86, 88, Neharpar, Sainik Colony & more. No brokerage. Book free site visit today.",

keywords: [
 "rent house in Faridabad", "house for rent Faridabad", "home on rent Faridabad", "independent house for rent Faridabad", "2 BHK house for rent Faridabad", "3 BHK house for rent Faridabad", "furnished house for rent Faridabad", "affordable house on rent Faridabad", "no brokerage house rent Faridabad", "house rent Neharpar Faridabad", "rent house Sainik Colony Faridabad", "monthly rent house Faridabad"
],

  alternates: {
    canonical: "www.houseforrentinfaridabad.com/",
  },
  verification: {
    google: "E5Cv_41W3Z16pv3hqk-twbghqT0qgR7btFlmd-zcOWU",
  },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* ✅ Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KJ23TVKZ');
            `,
          }}
        />

        {/* ✅ Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XP5YLVK2EE"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XP5YLVK2EE');
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ GTM NoScript */}
        
 <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ23TVKZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>


        {/* ✅ Providers */}
        <PropertyProvider>
          <BlogProvider>
            <Navbar />
            {children}
            <ScrollToTop />
            <Footer />
            <Toaster position="top-right" reverseOrder={false} />
          </BlogProvider>
        </PropertyProvider>
      </body>
    </html>
  );
}