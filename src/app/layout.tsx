import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import { AsideContatacts } from "@/components/AsideContacts";
import { EmailContextProvider } from "@/contexts/useEmail";

const inter = Inter({
  variable: "--font-inter",
  display: 'swap',
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ['latin'],
  weight: ['400', '500', "600", "700"],
});

export const metadata: Metadata = {
  title: "Marcelo Gomes portifolio",
  description: "Desevolvedor Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const email = String(process.env.MY_EMAIL);

  return (
    <html lang="pt-BR">
      <body
        className={`flex ${inter.variable} ${jetBrainsMono.variable} antialiased h-[100vh] max-w-[1366px] pl-10 overflow-hidden ls:pl-0 ml:flex-col ml:pl-8 sm:pl-4`}
      >
        <EmailContextProvider email={email}>
          <AsideContatacts />
          
          <main className="w-full overflow-y-scroll pr-10 ls:pr-0 ml:pr-8 sm:pr-4">
            {children}
          </main>
        </EmailContextProvider>
      </body>
    </html>
  );
}
