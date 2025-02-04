import React, { useState, useEffect } from "react";

interface TextBoxProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  helpertext: string;
}

const Texbox = ({
  placeholder,
  onChange,
  name,
  helpertext,
}: TextBoxProps) => {
  const [_value, _setValue] = useState("");

  const _onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    _setValue(e.target.value);
  };

  useEffect(() => {
    onChange({
      target: { value: _value },
    } as React.ChangeEvent<HTMLInputElement>);
  }, [_value, onChange]);

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-[576px] mx-auto lg:mx-0 w-full">
        <p className="text-sm text-left lg:text-left mb-2 ml-2 italic opacity-50">
          {helpertext}
        </p>
        <input
          className="bg-[--color-dark-accent] p-3 px-5 rounded-xl drop-shadow-lg max-w-[576px] lg:max-w-none mx-auto lg:mx-0 w-full"
          type="text"
          placeholder={placeholder}
          value={_value}
          onChange={_onChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default Texbox;
