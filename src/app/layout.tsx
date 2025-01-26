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

export const metadata: Metadata = {
  title: "Matheus Sena Rosa | Portfólio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://matheusrosa-dev.com",
    siteName: "Matheus Sena Rosa | Portfólio",
    title: "Matheus Sena Rosa",
    description:
      "atuo na área de desenvolvimento de software há mais de 3 anos. Tenho experiência com desenvolvimento web e mobile usando React.js, React Native e Node.js. Estou sempre aprimorando meus conhecimentos e indo atrás de novos desafios.",
    images: [
      {
        url: "https://raw.githubusercontent.com/matheusrosa-dev/Portfolio/refs/heads/master/public/full-logo.png",
        width: 261,
        height: 134,
      },
    ],
  },
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
