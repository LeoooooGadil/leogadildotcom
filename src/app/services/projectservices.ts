import { supabase } from "@/utils/supabase";
import { ValidateNewProject } from "@/utils/validators";
import { CreateNewMDX, mdxType } from "./mdxservices";
import moment from "moment";
import { TechIconType } from "@/components/TechStack";

export type ProjectNewData = {
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string | null;
  keywords: string[];
  techstack: TechIconType[];
};

export type ProjectDB = {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  description: string;
  image: string | null;
  keywords: string[];
  techstack: TechIconType[];
  mdx_id: string;
  create_date: Date;
  update_date: Date;
};

const CreateNewProject = async (projectData: ProjectNewData) => {
  return new Promise(async (resolve, reject) => {
    try {

      const _mdxData = {
        type: "project" as mdxType,
        title: projectData.name,
        subtitle: projectData.subtitle,
        image: projectData.image,
        keywords: projectData.keywords,
        readtime: 0,
        content: "",
      };
      const mdxResponse = await CreateNewMDX(_mdxData) as { data: any };
      
      if (!mdxResponse.data || !mdxResponse.data[0]?.id) {
        throw new Error("Failed to create MDX. Invalid response data.");
      }

      const _projectData = {
        name: projectData.name,
        slug: projectData.name.toLowerCase().replace(/\s+/g, '-'),
        subtitle: projectData.subtitle,
        description: projectData.description,
        image: projectData.image,
        keywords: projectData.keywords,
        techstack: projectData.techstack,
        mdx_id: mdxResponse.data[0].id,
        create_date: moment().format(),
        update_date: moment().format(),
      }

      const validation = ValidateNewProject({ json: _projectData});
      if(!validation.valid) throw new Error(`Error: ${validation.errors}`);

      const { data, error } = await supabase.from("projects").insert(_projectData).select();

      if (error) {
        throw new Error(`Insert failed: ${error.message}`);
      }

      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

const SelectProject = async (projectid: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("project").select().eq("id", projectid);

      if(error) {
        throw new Error(`Select failed: ${error.message}`);
      }

      resolve({ data })
    } catch(error) {
      reject(error);
    }
  });
}

const GetAllProjects = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("projects").select();

      if (error) {
        throw new Error(`Failed to fetch projects: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
};

export { CreateNewProject, SelectProject, GetAllProjects };
