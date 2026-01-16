import "./globals.css";
import { Inter } from "next/font/google";

// IMPORTAÇÃO CORRETA (Sem chaves, pois é export default)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SS Seguro & Sinistro",
  description: "Portal de consultoria especializada em seguros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}