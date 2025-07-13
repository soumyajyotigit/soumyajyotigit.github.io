import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
}