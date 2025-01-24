import type { Metadata } from "next";
import { Poppins, Oswald } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

// TODO: Add metadata
export const metadata: Metadata = {
  title: "Matheus Sena Rosa",
  description: "Teste",
};

type Props = {
  children: React.ReactNode;
};

function RootLayout({ children }: Props) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
