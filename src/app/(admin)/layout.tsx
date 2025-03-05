import EditorContextProvider from "@/contexts/EditorContext";
import SideBarComponent from "@/components/sidebar/sidebar-component";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EditorContextProvider>
      <div className="flex h-screen">
        <SideBarComponent />
        <div className="">{children}</div>
      </div>
    </EditorContextProvider>
  );
}
