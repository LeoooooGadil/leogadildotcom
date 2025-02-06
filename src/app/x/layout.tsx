import EditorContextProvider from "@/contexts/EditorContext";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EditorContextProvider>
      <div className={`mx-auto max-w-screen-xl overflow-hidden`}>
        <div className="relative">{children}
        </div>
      </div>
    </EditorContextProvider>
  );
}
