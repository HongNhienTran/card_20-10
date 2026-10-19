import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thiệp 20/10 Pokémon - Chúc Mừng Ngày Phụ Nữ Việt Nam",
  description: "Thiệp chúc mừng 20/10 phong cách game pixel Pokémon trong sáng, dễ thương!",
  keywords: ["20/10", "Pokemon", "Pixel Art", "Vietnamese Women's Day", "Thiệp 20/10"],
  authors: [{ name: "Pokemon Adventure" }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="h-full">
      <body className="min-h-full flex flex-col bg-[#5cb8ff] text-[#1b3858] antialiased selection:bg-[#ffdf00] selection:text-[#1b3858]">
        {children}
      </body>
    </html>
  );
}
