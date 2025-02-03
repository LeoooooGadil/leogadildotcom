"use client";

import React, {
	createContext,
	ReactNode,
	useState
} from "react";
import { GetAllBlogs, BlogDB } from "../services/blogsservices";

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
		</BlogsContext.Provider>
	)
}
