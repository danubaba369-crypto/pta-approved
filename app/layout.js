import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "PAM | PTA Approved Mobiles & Premium Used Mobiles Marketplace",
  description: "Buy premium certified used mobiles in Pakistan. All phones are PTA Approved with 7-day replacement warranty.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
