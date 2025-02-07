import "./globals.css";
import Navbar from "@/components/Navbar";
import BookingButton from "@/components/BookingButton";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Le Salama",
  description: "Moroccan soul food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative w-full h-fit flex flex-col justify-start items-center">
        <Navbar />
        <div className="fixed bottom-0 left-0 w-full block lg:hidden z-10">
          <BookingButton />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
