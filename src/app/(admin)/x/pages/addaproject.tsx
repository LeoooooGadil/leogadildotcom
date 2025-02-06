import { useState } from "react";
import Title from "@/components/Title";
import Description from "@/components/Description";
import TextBox from "@/components/Textbox";
import MultilineTextBox from "@/components/MultilineTextbox";
import Button from "@/components/Button";
import ErrorHandler from "@/components/Error";

import { CreateNewProject } from "@/services/projectservices";
import TechStackPicker from "@/components/TechStackPicker";
import { TechIconProps } from "@/app/components/TechStack";
import { useRouter } from "next/navigation";
import MultiSelectTextbox from "@/components/MultiselectTextbox";
import { ProjectNewData } from "@/services/projectservices";
import { useProjectsContext } from "@/app/contexts/ProjectsContext";

const IconSize = 20;

const AvailableTechStack: TechIconProps[] = [
  { iconName: "Typescript", size: IconSize },
  { iconName: "Javascript", size: IconSize },
  { iconName: "Python", size: IconSize },
  { iconName: "React", size: IconSize },
  { iconName: "TailwindCSS", size: IconSize },
  { iconName: "Firebase", size: IconSize },
  { iconName: "MongoDB", size: IconSize },
  { iconName: "Unity", size: IconSize },
  { iconName: "Photoshop", size: IconSize },
  { iconName: "Premiere", size: IconSize },
  { iconName: "After Effects", size: IconSize },
];

const AddAProjectComponent = () => {
  const router = useRouter();

  const { fetchData } = useProjectsContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [projectData, setProjectData] = useState({
    name: "",
    slug: "",
    subtitle: "",
    description: "",
    image: null,
    keywords: [],
    techstack: [],
  } as ProjectNewData);

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChangeProjectName = (event: any) => {
    setProjectData({ ...projectData, name: event.target.value });
  };

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChangeProjectSubtitle = (event: any) => {
    setProjectData({ ...projectData, subtitle: event.target.value });
  };

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChangeProjectDescription = (event: any) => {
    setProjectData({ ...projectData, description: event.target.value });
  };

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChangeProjectKeywords = (keywords: any) => {
    setProjectData({ ...projectData, keywords: keywords });
  };

  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const handleChangeProjectTechStack = (techstack: any) => {
    setProjectData({ ...projectData, techstack: techstack });
  };

  const onSubmit = () => {
    setLoading(true);
    CreateNewProject(projectData)
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      .then((data : any) => {
        fetchData();
        const mdxId = data[0].mdx_id;
        router.push("/x/editor?mdx=" + mdxId);
      })
      .catch((error) => {
        setError(error)
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col px-4 lg:px-0 mx-auto lg:mx-0">
      <Title title="Add a Project" />
      <Description text="Add a project on your portfolio. Initialize it here and add a description." />
      {
        error && (<ErrorHandler error={error} />)
      }
      <div className="flex flex-col gap-8 mt-8">
        <TextBox
          placeholder="Project Name"
          value=""
          onChange={handleChangeProjectName}
          name="project_name"
          helpertext="The name of the project"
        />
        <TextBox
          placeholder="Project Subtitle"
          value=""
          onChange={handleChangeProjectSubtitle}
          name="project_subtitle"
          helpertext="The subtitle of the project"
        />
        <MultilineTextBox
          placeholder="Project Description"
          value=""
          onChange={handleChangeProjectDescription}
          name="project_description"
          helpertext="The description of the project"
        />
        <MultiSelectTextbox
          onItemsChange={handleChangeProjectKeywords}
          placeholder="Keywords"
          helpertext="Keywords to describe the project (press enter to add)"
        />
        <TechStackPicker
          availableTechStack={AvailableTechStack}
          onTechStackChange={handleChangeProjectTechStack}
          selectedTechStack={projectData.techstack}
          helpertext="The tech stack used in the project"
        />
        <div className="flex justify-end gap-8 mt-8 mb-24">
          <Button
            text="Create New Project"
            onClick={onSubmit}
            onLoading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default AddAProjectComponent;
