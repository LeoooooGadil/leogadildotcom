interface SettingsTitleComponentProps {
    title: string;
}

const SettingsTitleComponent = ({ title }: SettingsTitleComponentProps) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center lg:text-left">{title}</h1>
        </div>
    );
};

export default SettingsTitleComponent;