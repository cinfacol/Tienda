import Navbar from "@/components/navbar";
import Providers from "@/components/Providers";
import "./globals.css";
import "@/styles/fonts.css";
// import "@/styles/customVideo.css";
import { Nunito } from "next/font/google";
import Footer from "@/components/Footer";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda - Ecommerce",
  description: "tienda online django nextjs docker postgres celery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
