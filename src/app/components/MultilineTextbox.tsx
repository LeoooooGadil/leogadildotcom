import React, { useState, useEffect } from "react";

interface MultilineTextBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name: string;
  helpertext: string;
}

const MultilineTextbox = ({
  placeholder,
  onChange,
  name,
  helpertext,
}: MultilineTextBoxProps) => {
  const [_value, _setValue] = useState("");

  const _onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    _setValue(e.target.value);
  };

  useEffect(() => {
    onChange({
      target: { value: _value },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  }, [_value, onChange]);

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-[576px] mx-auto lg:mx-0 w-full">
        <p className="text-sm text-left lg:text-left mb-2 ml-2 italic opacity-50">
          {helpertext}
        </p>
        <textarea
          className="bg-[--color-dark-accent] p-3 px-5 rounded-xl drop-shadow-lg max-w-[576px] lg:max-w-none mx-auto lg:mx-0 w-full min-h-[100px]"
          placeholder={placeholder}
          value={_value}
          onChange={_onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default MultilineTextbox;
