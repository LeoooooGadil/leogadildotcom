import type { Metadata } from "next";
import "../globals.css";
import Navigation from "./components/navigation/navigation";
import FooterComponent from "@/app/components/Footer";
import EditorContextProvider from "@/contexts/EditorContext";

// export const metadata: Metadata = {
// 	title: "Administrator",
// 	description: "Admin Page for the portfolio of Leo Gadil",
// };

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EditorContextProvider>
      <div className={`mx-auto max-w-screen-xl overflow-hidden`}>
        <div className="w-full flex justify-center">
          <Navigation />
        </div>
        {children}
        <div>
          <FooterComponent />
        </div>
      </div>
    </EditorContextProvider>
  );
}
