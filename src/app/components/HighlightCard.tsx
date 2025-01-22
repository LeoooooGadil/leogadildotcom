import { FaExternalLinkAlt } from "react-icons/fa";

type HighlightType = "project" | "blog" | "video" | "other";

interface HighlightComponentProps {
  title: string;
  description?: string;
  type: HighlightType;
  link: string;
  color?: string;
}

const HighlightCard = ({ title, description, type, link, color }: HighlightComponentProps) => {

  const LinkText = () => {
    switch (type) {
      case "blog":
        return "read blog";
      case "project":
        return "view project";
      case "video":
        return "watch video";
      case "other":
        return "view";
      default:
        return "view";
    }
  };

  return (
    <div
      className={`flex flex-col w-full rounded-2xl p-4 drop-shadow-lg w-full max-w-[356px] lg:w-72 mx-auto h-48`}
      style={{
        backgroundColor: `var(${color})`,
      }}
    >
      <div className="flex-1 flex items-center">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold">{title}</h2>

          <p className="text-sm font-normal">{description}</p>
        </div>
      </div>
      <div className="flex justify-end ">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 font-normal text-sm hover:underline"
        >
          {LinkText()} <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default HighlightCard;