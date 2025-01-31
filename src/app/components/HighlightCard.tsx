import { TbArrowUpRight } from "react-icons/tb";

type HighlightType = "project" | "blog" | "video" | "other";

interface HighlightComponentProps {
  title: string;
  description?: string;
  type: HighlightType;
  link: string;
  color?: string;
  additionalText?: string;
  className?: string;
}

const HighlightCard = ({
  title,
  description,
  type,
  link,
  color,
  additionalText,
  className
}: HighlightComponentProps) => {
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
    <button className="group">
      <div
        className={`flex flex-col w-full rounded-xl p-2 drop-shadow-xl lg:w-72 mx-auto h-40 ${className} group-hover:rotate-0 transition-transform duration-150`}
        style={{
          backgroundColor: `var(${color})`,
        }}
      >
        <div className="flex-1 flex p-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold text-left">{title}</h2>

            <p className="text-sm font-normal text-left opacity-80">
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center px-2">
          <div></div>
          <div className="relative">
            <TbArrowUpRight
              size={25}
              className="transition-all absolute -right-5 group-hover:-right-7 -bottom-4 group-hover:-bottom-3 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default HighlightCard;
