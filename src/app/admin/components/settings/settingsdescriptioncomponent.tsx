import react from "react";

interface SettingsDescriptionComponentProps {
    text: string;
}

const SettingsDescriptionComponent = ({ text }: SettingsDescriptionComponentProps) => {
    return (
        <div>
            <p className="text-sm text-center lg:text-left opacity-80 my-4">{text}</p>
        </div>
    );
};

export default SettingsDescriptionComponent;