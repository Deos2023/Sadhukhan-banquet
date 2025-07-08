import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTop";

import "./globals.css";
import { Ephesis, Sono, Oswald, Rye } from 'next/font/google';

const ephesis = Ephesis({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-ephesis',
});

const sono = Sono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-sono',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
});

const rye = Rye({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rye',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${ephesis.variable} ${sono.variable} ${oswald.variable} ${rye.variable}`}
        style={{
          fontFamily: 'var(--font-rye)', // 👈 This will apply Rye globally
          letterSpacing: '0.05em',
        }}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
