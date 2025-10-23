import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { StarryBackground } from '@/components/quiz/StarryBackground';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: 'Cosmic Recomeço Quiz',
  description: 'Descubra qual energia cósmica guia o seu recomeço.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://i.imgur.com" />
      </head>
      <body className="font-body antialiased">
        <StarryBackground />
        <main>{children}</main>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
