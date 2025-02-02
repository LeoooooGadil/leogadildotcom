"use client";

import React, { ReactNode, useState, useEffect, useContext, createContext } from "react";
import { GetAllProjects, ProjectDB } from "@/services/projectservices";

interface ProjectsContextType {
  projects: ProjectDB[] | null;
  setProjects: React.Dispatch<React.SetStateAction<ProjectDB[] | null>>;
  getProjectBySlug: (slug: string) => ProjectDB | undefined;
  getProjectByMxd: (mdxid: string) => ProjectDB | undefined;
  fetchData: () => void;
}

export const ProjectsContext = createContext<ProjectsContextType | undefined>(
  undefined
);

interface ProjectsContextProviderProps {
  children: ReactNode;
}

export default function ProjectsContextProvider({
  children,
}: ProjectsContextProviderProps) {
  const [projects, setProjects] = useState<ProjectDB[] | null>(null);

  const getProjectBySlug = (slug: string) => {
    if (!projects) return undefined;
    return projects.find((project) => project.slug === slug); // Find the project with the matching slug
  };

  const getProjectByMxd = (mdxid: string) => {
    if (!projects) return undefined;
    return projects.find((project) => project.mdx_id === mdxid);
  }

  const fetchData = () => {
    GetAllProjects()
    .then((data : any) => {
      setProjects(data.data)
    })
    .catch((error) => {
      throw new Error("Error getting all the Projects.")
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        getProjectBySlug,
        getProjectByMxd,
        fetchData
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

export function useProjectsContext() {
  const context = useContext(ProjectsContext);
  if (context === undefined) {
    throw new Error(
      "useProjectsContext must be used within an ProjectsContextProvider"
    );
  }
  return context;
}
