import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Union Developers - Experiência prática e imersiva para desenvolvedores juniors",
  description: "O Union proporciona experiência prática e imersiva para desenvolvedores juniors, transformando-os em profissionais preparados para o mercado.",
  keywords: ["Union Developers", "desenvolvedores juniors", "experiência prática", "programação"],
  openGraph: {
    title: "Union Developers",
    description: "Experiência prática e imersiva para desenvolvedores juniors",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Union Developers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1F1D2B" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}