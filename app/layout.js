import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { NavProvider } from "@/context/NavContext";
import NavProviderWrapper from "@/components/NavProviderWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Adnan's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased w-full min-h-screen font-inter`}>
        <NavProviderWrapper>
          <Navbar />
          <ToastContainer position="top-right" />
          {children}
          <Footer />
        </NavProviderWrapper>
      </body>
    </html>
  );
}