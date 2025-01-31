"use client";

import React, { ReactNode, useState, useEffect, useContext, createContext } from "react";
import { GetAllMDX, MDXDB } from "@/services/mdxservices";

interface MDXContextType {
  mdxList: MDXDB[] | null;
  setMdxList: React.Dispatch<React.SetStateAction<MDXDB[] | null>>;
  getMDXById: (id: string) => MDXDB | undefined;
  fetchData: () => void;
}

export const MDXContext = createContext<MDXContextType | undefined>(undefined);

interface MDXContextProviderProps {
  children: ReactNode;
}

export default function MDXContextProvider({
  children,
}: MDXContextProviderProps) {
  const [mdxList, setMdxList] = useState<MDXDB[] | null>(null);

  const getMDXById = (id: string) => {
    if (!mdxList) return undefined;
    return mdxList.find((mdx) => mdx.id === id); // Find the MDX with the matching ID
  };

  const fetchData = () => {
    GetAllMDX() // Fetch all MDX data using GetAllMDX
      .then((data: any) => {
        setMdxList(data?.data || []); // Set the MDX list with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching MDX data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MDXContext.Provider
      value={{
        mdxList,
        setMdxList,
        getMDXById,
        fetchData,
      }}
    >
      {children}
    </MDXContext.Provider>
  );
}

export function useMDXContext() {
  const context = useContext(MDXContext);
  if (context === undefined) {
    throw new Error("useMDXContext must be used within an MDXContextProvider");
  }
  return context;
}
