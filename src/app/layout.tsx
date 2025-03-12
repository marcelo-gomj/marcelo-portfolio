import "./globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import { AsideContatacts } from "@/components/AsideContacts";
import { ContactsContextProvider } from "@/contexts/useContacts";
import { ContactsContextProps } from "@/types/global";

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
  const contacts: ContactsContextProps = {
    email: String(process.env.MY_EMAIL),
    github: String(process.env.GITHUB),
    instagram: String(process.env.INSTAGRAM)
  }

  return (
    <html lang="pt-BR">
      <body
        className={`flex relative ${inter.variable} ${jetBrainsMono.variable} antialiased h-[100vh] max-w-[1366px] pl-10 overflow-hidden ls:pl-0 ml:flex-col ml:pl-8 sl:pl-3`}
      >
        <ContactsContextProvider
          contacts={contacts}
        >
          <AsideContatacts />

          <main className="w-full overflow-y-scroll pr-10 ls:pr-0 ml:pr-8 sl:pr-3">
            {children}
          </main>
        </ContactsContextProvider>
      </body>
    </html>
  );
}
