import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata = {
  title: "Soumyajyoti Karmakar | Full-Stack Developer",
  description: "Portfolio of Soumyajyoti Karmakar, a full-stack developer building resilient, cloud-native products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body id="top" className="bg-[#070811] text-slate-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
