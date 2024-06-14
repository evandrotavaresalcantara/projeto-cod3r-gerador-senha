import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Gerador de Senha",
  description: "Uma Aplicação que gera senha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={'bg-gradient-to-r from-slate-900 to-slate-700 w-screen h-screen'}>{children}</body>
    </html>
  );
}
