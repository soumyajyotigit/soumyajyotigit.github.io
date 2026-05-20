import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Soumyajyoti | Portfolio",
  description: "Cloud Native AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
