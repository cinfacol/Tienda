import { Navbar, Footer } from "@/components/common";
import ProductsList from "@/components/products/ProductsList";
import { Setup } from "@/components/utils";
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
          <Setup />
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            {children}
          </div>
          <ProductsList />
          <Footer />
        </CustomProvider>
      </body>
    </html>
  );
}
