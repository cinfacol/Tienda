import { Navbar, Footer } from "@/components/navbar";
import CustomProvider from "@/redux/provider";
import "@/styles/globals.css";
import { Nunito } from "next/font/google";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Tienda - Ecommerce",
  description: "tienda online django nextjs docker postgres celery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <CustomProvider>
          <Navbar />
          <div>{children}</div>
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
