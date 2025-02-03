import type { Metadata } from "next";
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
        <div className="relative">{children}
          <div>
            {/* <FooterComponent /> */}
          </div>
        </div>
      </div>
    </EditorContextProvider>
  );
}
