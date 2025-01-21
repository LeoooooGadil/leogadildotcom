import react, { useState } from "react";
import SettingsTitleComponent from "../component/settings/settingstitlecomponent";
import SettingsDescriptionComponent from "../component/settings/settingsdescriptioncomponent";
import SettingsTextBoxComponent from "../component/settings/settingstextboxcomponent";
import SettingsMultilineTextBoxComponent from "../component/settings/settingsmultilinetextboxcomponent";
import SettingsButtonComponent from "../component/settings/settingsbuttoncomponent";

const AddAProjectComponent = () => {

    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        console.log("submit");
        setLoading(true);
    }

  return (
    <div className="flex flex-col px-14 lg:px-0 mx-auto lg:mx-0">
      <SettingsTitleComponent title="Add a Project" />
      <SettingsDescriptionComponent text="Add a project on your portfolio. Initialize it here and add a description." />
      <div className="flex flex-col gap-8 mt-8">
        <SettingsTextBoxComponent
          placeholder="Project Name"
          value=""
          onChange={() => {}}
          name="project_name"
          helpertext="The name of the project"
        />
        <SettingsTextBoxComponent
          placeholder="Project Subtitle"
          value=""
          onChange={() => {}}
          name="project_subtitle"
          helpertext="The subtitle of the project"
        />
        <SettingsMultilineTextBoxComponent
          placeholder="Project Description"
          value=""
          onChange={() => {}}
          name="project_description"
          helpertext="The description of the project"
        />
        <div className="flex justify-end gap-8 mt-8">
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
