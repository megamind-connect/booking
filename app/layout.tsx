import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bookings.megamind.studio"),
  title: {
    default: "Website & Brand Audit Consultation | Megamind Studios",
    template: "%s | Megamind Studios"
  },
  description: "Book a 1-on-1 website and brand audit consultation with Megamind Studios. Share your business, website, brand, and growth requirements.",
  keywords: [
    "website audit",
    "brand consultation",
    "business growth",
    "conversion rate optimization",
    "brand strategy",
    "Megamind Studios",
    "digital marketing audit",
    "UX audit"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Website & Brand Audit Consultation | Megamind Studios",
    description: "Book a 1-on-1 website and brand audit consultation with Megamind Studios. Share your business, website, brand, and growth requirements.",
    url: "https://bookings.megamind.studio",
    siteName: "Megamind Studios Bookings",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/megamindlogoBlack.webp",
        width: 1200,
        height: 630,
        alt: "Megamind Studios Brand Audit"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & Brand Audit Consultation | Megamind Studios",
    description: "Book a 1-on-1 website and brand audit consultation with Megamind Studios. Share your business, website, brand, and growth requirements.",
    images: ["/megamindlogoBlack.webp"]
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={redHatDisplay.variable}>
      <body>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5QJC7SJK0B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-5QJC7SJK0B');
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NBHS9G6T');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wwyy57balg");
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1415120790303243');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBHS9G6T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel Code (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1415120790303243&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}

