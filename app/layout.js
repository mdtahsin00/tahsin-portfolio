import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata = {
  title: "MD Tahsin Sikdar — Full-stack developer",
  description:
    "Portfolio of MD Tahsin Sikdar: full-stack web developer, cyber security, SEO and graphic design from Bangladesh.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
