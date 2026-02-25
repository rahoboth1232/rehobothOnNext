
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";
import Fotter from "./components/Fotter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Digital Marketing Company in Janakpuri, Delhi | SEO, SMM & Web Design",
  description:
    "Rehoboth Digitech Solution is a trusted digital marketing company in Janakpuri, Delhi providing SEO, SMM, web design, and paid ads to help businesses grow online.",

  keywords: [
    "Rehoboth Digitech Solution",
    "digital marketing company",
    "SEO services",
    "web development company",
    "online marketing services",
    "website development services",
  ],
  icons: {
    icon: "/navlogo.png",
  },
 
  alternates: {
    canonical: "https://www.rehobothdigitechsolution.com/",
  },
  openGraph: {
    title: "Rehoboth Digitech Solution | Digital Marketing & SEO Company",
    description:
      "Expert SEO, web development, and digital marketing services to grow your business online.",
    url: "https://www.rehobothdigitechsolution.com/",
    siteName: "Rehoboth Digitech Solution",
    images: [
      {
        url: "https://www.rehobothdigitechsolution.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rehoboth Digitech Solution",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rehoboth Digitech Solution | Digital Marketing Company",
    description:
      "Professional SEO, web development, and digital marketing services to boost your online presence.",
    images: ["https://www.rehobothdigitechsolution.com/twitter-card.jpg"],
    site: "@RehobothDigitech",
    creator: "@RehobothDigitech",
  },
};



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Fotter/>

  <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17720836397"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17720836397');
          `}
        </Script>

        {/* JSON-LD Structured Data */}
        <Script id="schema-org" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rehoboth Digitech Solution",
            url: "https://www.rehobothdigitechsolution.com/",
            logo: "https://www.rehobothdigitechsolution.com/logo.png",
            description:
              "Rehoboth Digitech Solution is a digital marketing and web development company providing SEO and online marketing services.",
            sameAs: [
              "https://www.instagram.com/rehobothdigitechsolution/",
              "https://www.facebook.com/RehobothDigitechSolution/",
              "https://twitter.com/RehobothDigitech",
            ],
          })}
        </Script>


      </body>
    </html>
  );
}
