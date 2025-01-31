import React from "react";
import { TechIconProps, TechIcon } from "@/app/components/TechStack";

interface TechStackPickerProps {
  availableTechStack: TechIconProps[];
  onTechStackChange: (techStack: string[]) => void;
  selectedTechStack: string[];
  helpertext?: string;
}

const TechStackPicker = ({
  availableTechStack,
  onTechStackChange,
  selectedTechStack: value,
  helpertext,
}: TechStackPickerProps) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-[576px] mx-auto lg:mx-0 w-full">
        <p className="text-sm text-left lg:text-left opacity-80 mb-2 ml-2 italic opacity-50">
          {helpertext}
        </p>
        <div className="bg-[--color-dark-accent] rounded-xl p-4 drop-shadow-lg">
          <div className="flex flex-wrap justify-left lg:justify-start gap-1">
            {availableTechStack.map((tech, index) => (
              <div key={index} className="flex items-center gap-6">
                <div
                  className={`flex transition-colors items-center gap-2 cursor-pointer ${value.includes(
                    tech.iconName
                  )
                      ? "border border-[--color-primary] bg-[--color-primary]"
                      : "border border-[--color-dark-accent-2]"
                    } p-2 px-3 rounded-xl drop-shadow-lg`}
                  onClick={() => {
                    if (value.includes(tech.iconName)) {
                      onTechStackChange(value.filter((t) => t !== tech.iconName));
                    } else {
                      onTechStackChange([...value, tech.iconName]);
                    }
                  }}
                >
                  <TechIcon iconName={tech.iconName} size={20} />
                  <span className="text-sm opacity-70 text-sm lg:text-base">
                    {tech.iconName}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {value.length !== 0 && (
            <>
              <p className="text-sm text-left lg:text-left opacity-80 mt-6 italic opacity-50">
                Selected <span className="font-bold">{value.length}</span> tech
                stack
              </p>

              <div className="flex flex-wrap gap-2 pt-2 px-1">
                {value.map((tech, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <TechIcon iconName={tech} size={20} />
                      <span className="text-sm opacity-70 hidden lg:block">
                        {tech}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStackPicker;
