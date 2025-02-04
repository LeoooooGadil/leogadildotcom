"use client";

import React, {
	createContext,
	ReactNode,
	useContext,
	useState
} from "react";
import { BlogDB } from "../services/blogsservices";

interface BlogContextType {
	blogs: BlogDB[] | null;
	setBlogs: React.Dispatch<React.SetStateAction<BlogDB[] | null>>;
}

export const BlogsContext = createContext<BlogContextType | undefined>(
	undefined
);

interface BlogsContextProviderProps {
	children: ReactNode
}

export default function BlogsContextProvider({
	children
}: BlogsContextProviderProps) {
	const [blogs, setBlogs] = useState<BlogDB[] | null>(null);

	return (
		<BlogsContext.Provider value={{
			blogs, setBlogs
		}}>
			{children}
		</BlogsContext.Provider>
	)
}

export function useBlogsContext() {
	const context = useContext(BlogsContext);
	if (context === undefined) {
		throw new Error(
			"useBlogsContext must be used within an BlogsContextProvider"
		)
	}
	return context;
}
