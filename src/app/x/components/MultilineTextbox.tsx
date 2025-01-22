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
  value,
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
  }, [_value]);

  return (
    <div>
      <p className="text-sm text-left lg:text-left opacity-80 mb-2 ml-2 italic opacity-50">
        {helpertext}
      </p>
      <textarea
        className="bg-[--color-dark-accent] p-3 px-8 lg:px-8 rounded-2xl drop-shadow-lg max-w-[576px] lg:max-w-none mx-auto lg:mx-0 w-full min-h-[75px]"
        placeholder={placeholder}
        value={_value}
        onChange={_onChange}
        name={name}
      />
    </div>
  );
};

export default MultilineTextbox;
