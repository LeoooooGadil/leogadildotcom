"use client";

import React, {
  ReactNode,
  useState,
  useEffect,
  useContext,
  createContext,
} from "react";
import { GetAllProjects, ProjectDB } from "@/services/projectservices";

interface ProjectsContextType {
  projects: ProjectDB[] | null;
  setProjects: React.Dispatch<React.SetStateAction<ProjectDB[] | null>>;
  getProjectBySlug: (slug: string | string[]) => ProjectDB | (ProjectDB | undefined)[] | undefined;
  getProjectByMxd: (mdxid: string) => ProjectDB | undefined;
  getProjectById: (id: string | string[]) => ProjectDB | (ProjectDB | undefined)[] | undefined;
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

  const getProjectBySlug = (slug: string | string[]) => {
    if (!projects) return undefined;
    
    if(typeof slug === "string") {
      return projects.find((project) => project.slug === slug);
    } else if (Array.isArray(slug)) {
      return slug
      .map((projectslug) => 
        projects.find((project) => project.slug === projectslug)
      ).filter(Boolean)
    }

    return undefined;
  };

  const getProjectById = (id: string | string[]) => {
    if (!projects) return undefined;

    if (typeof id === "string") {
      return projects.find((project) => project.id === id);
    } else if (Array.isArray(id)) {
      return id
        .map((projectId) =>
          projects.find((project) => project.id === projectId)
        )
        .filter(Boolean);
    }

    return undefined;
  };

  const getProjectByMxd = (mdxid: string) => {
    if (!projects) return undefined;
    return projects.find((project) => project.mdx_id === mdxid);
  };

  const fetchData = () => {
    GetAllProjects()
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      .then((data: any) => {
        setProjects(data.data);
      })
      .catch(() => {
        throw new Error("Error getting all the Projects.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProjectsContext.Provider
      value={{
        projects,
        setProjects,
        getProjectBySlug,
        getProjectByMxd,
        getProjectById,
        fetchData,
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
