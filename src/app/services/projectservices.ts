import { supabase } from "@/app/utils/supabase";
import { GenerateRandomFilename } from "@/app/utils/helpers";

type ProjectDataTechStack = {
  name: string;
  icon: string;
};

type ProjectData = {
  name: string;
  subtitle: string;
  description: string;
  image: string;
  techstack: ProjectDataTechStack[];
  mdx_id: string;
};

const CreateNewProject = async (projectData: ProjectData) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, error } = await supabase.from("projects").insert([
        {
          id: GenerateRandomFilename(),
          name: projectData.name,
          subtitle: projectData.subtitle,
          description: projectData.description,
          image: projectData.image,
          techstack: projectData.techstack,
          mdx: projectData.mdx_id,
					create_date: new Date(),
					update_date: new Date(),
        },
      ]);

      if (error) {
        throw new Error(`Insert failed: ${error.message}`);
      }

      resolve({ data });
    } catch (error) {
      console.error("Error inserting new project:", error);
      reject(error);
    }
  });
};

export { CreateNewProject };
