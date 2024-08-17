import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adithya's Dev Journal",
  description: "made by adithyaps",
  icons : {
    icon: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/html-coding-4681343-3881015.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
