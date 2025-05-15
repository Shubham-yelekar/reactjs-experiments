import "@/app/ui/global.css";
import { geist, geist_mono } from "./ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased `}>{children}</body>
    </html>
  );
}
