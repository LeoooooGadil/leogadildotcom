"use client";

import React, { useState } from "react";

interface CheckboxProps {
	label: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox = ({ label, onChange }: CheckboxProps) => {
	return (
		<div>
			<label className="flex items-center gap-2">
				<CustomCheckbox onChange={() => {}} />
				<span>
					{label}
				</span>
			</label>
		</div>
	);
};

interface CustomCheckboxProps {
	onChange: () => void
}

function CustomCheckbox({ onChange }: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
		onChange();
  };

  return (
    <div className="flex items-center">
      {/* Hidden Native Checkbox */}
      <input
        type="checkbox"
        id="checkbox"
        className="peer hidden"
        checked={isChecked}
        onChange={handleChange}
      />
      {/* Custom Checkbox */}
      <label
        htmlFor="checkbox"
        className={`select-none h-4 w-4 cursor-pointer rounded flex items-center justify-center ${
          isChecked ? "bg-[--color-primary] border-[--color-primary]" : "bg-white hover:border-[--color-primary-hover] border-[--color-primary] border"
        }`}
      >
        {/* Checkmark Icon */}
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 01.083 1.32l-.083.094-8 8a1 1 0 01-1.32.083l-.094-.083-4-4a1 1 0 011.32-1.497l.094.083L8 12.584l7.293-7.291a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </label>
    </div>
  );
}

export default Checkbox;
