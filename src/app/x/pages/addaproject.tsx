import react, { useState } from "react";
import SettingsTitleComponent from "@/app/x/components/Title";
import SettingsDescriptionComponent from "@/app/x/components/Description";
import SettingsTextBoxComponent from "@/app/x/components/Textbox";
import SettingsMultilineTextBoxComponent from "@/app/x/components/MultilineTextbox";
import SettingsButtonComponent from "@/app/x/components/Button";

import { CreateNewProject } from "@/app/services/projectservices";

const AddAProjectComponent = () => {

  const [loading, setLoading] = useState(false);

  const [projectData, setProjectData] = useState({
    name: "",
    subtitle: "",
    description: "",
    image: "",
    techstack: [],
    mdx_id: "",
  });

  const handleChangeProjectName = (event: any) => {
    setProjectData({ ...projectData, name: event.target.value });
  };

  const handleChangeProjectSubtitle = (event: any) => {
    setProjectData({ ...projectData, subtitle: event.target.value });
  };

  const handleChangeProjectDescription = (event: any) => {
    setProjectData({ ...projectData, description: event.target.value });
  };

  const onSubmit = () => {
    console.log("submitting project:", projectData);
    setLoading(true);

    CreateNewProject(projectData)
      .then((data) => {
        console.log("Project created:", data);
        // setLoading(false);

        // Redirect to editor page
        // router.push("/admin/editor?type=1&project=" + data.id);
      })
      .catch((error) => {
        console.error("Error creating project:", error);
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col px-14 lg:px-0 mx-auto lg:mx-0">
      <SettingsTitleComponent title="Add a Project" />
      <SettingsDescriptionComponent text="Add a project on your portfolio. Initialize it here and add a description." />
      <div className="flex flex-col gap-8 mt-8">
        <SettingsTextBoxComponent
          placeholder="Project Name"
          value=""
          onChange={handleChangeProjectName}
          name="project_name"
          helpertext="The name of the project"
        />
        <SettingsTextBoxComponent
          placeholder="Project Subtitle"
          value=""
          onChange={handleChangeProjectSubtitle}
          name="project_subtitle"
          helpertext="The subtitle of the project"
        />
        <SettingsMultilineTextBoxComponent
          placeholder="Project Description"
          value=""
          onChange={handleChangeProjectDescription}
          name="project_description"
          helpertext="The description of the project"
        />
        <div className="flex justify-end gap-8 mt-8 mb-24">
          <SettingsButtonComponent
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
