import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Watford Tutoring Academy | Excellence in Education",
  description:
    "Watford Tutoring Academy provides personalized tutoring services to help students achieve academic excellence.",
  keywords: "tutoring, education, academic support, Watford, learning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
