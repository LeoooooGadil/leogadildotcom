import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "./tiptap.css";
import "./syntaxhighlight.css";
import ProjectsContextProvider from "@/contexts/ProjectsContext";
import MDXContextProvider from "@/contexts/MDXContext";
import BlogsContextProvider from "@/contexts/BlogsContext";
import Navigation from "@/components/navigation/navigation";
import Footer from "@/components/Footer";

const globalFont = Poppins({
	display: "swap",
	weight: ["300", "400", "700", "500"],
	subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
	title: "Leo Gadil",
	description:
		"Jann Leo Gadil is a passionate software/game developer based in Manila, Philippines",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${globalFont.className} bg-[--color-dark] text-white mx-auto max-w-screen-lg overflow-y-scroll`}
			>
				<ProjectsContextProvider>
					<BlogsContextProvider>
						<MDXContextProvider>
							<div className="flex justify-center">
								<Navigation />
							</div>
							{children}
							<div>
								<Footer />
							</div>
						</MDXContextProvider>
					</BlogsContextProvider>
				</ProjectsContextProvider>
			</body>
		</html>
	);
}