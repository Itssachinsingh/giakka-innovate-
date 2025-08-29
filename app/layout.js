import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/ui/global/Header";
import Footer from "@/components/landing-page/Footer";
const satoshi = localFont({
  src: "../public/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Giakaa Innovate - Empower Your Business Vision",
  description: "At Giakaa Innovate, we accelerate strategic transformation by bridging innovation, global capability, and market foresight. Guided by our founding principles and seasoned advisory board, we empower clients-from growth-stage ventures to global enterprises-to enter new markets, commercialize frontier technologies, forge impactful partnerships, and influence policy. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
   <Header />
        {children}
             <Footer/>
      </body>
    </html>
  );
}
