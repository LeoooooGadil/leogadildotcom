import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/navigation";

const globalFont = Poppins({
  display: "swap",
  weight: ["300", "400", "700", "500"]
});

export const metadata: Metadata = {
  title: "Leo Gadil",
  description: "Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // add 
        className={`${globalFont.className} bg-[--color-dark] text-white mx-auto max-w-screen-lg`}
      >
        <div className="w-full flex justify-center">
        <Navigation />
        </div>
        {children}
      </body>
    </html>
  );
}
