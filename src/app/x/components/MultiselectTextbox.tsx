import { useState } from "react";

import { IoIosClose } from "react-icons/io";

interface MultiSelectTextboxProps {
  placeholder?: string;
  onItemsChange?: (items: string[]) => void;
  helpertext?: string;
}

const MultiSelectTextbox: React.FC<MultiSelectTextboxProps> = ({
  placeholder = "Add an item...",
  onItemsChange,
  helpertext,
}) => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!items.includes(inputValue.trim())) {
        const newItems = [...items, inputValue.trim()];
        setItems(newItems);
        onItemsChange?.(newItems);
      }
      setInputValue("");
    }
  };

  const handleRemoveItem = (itemToRemove: string) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
    onItemsChange?.(newItems);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="max-w-[576px] mx-auto lg:mx-0 w-full">
        {helpertext && (
          <p className="text-sm text-left lg:text-left opacity-80 mb-2 ml-2 italic opacity-50">
            {helpertext}
          </p>
        )}
        <div className="flex flex-wrap gap-1 bg-[--color-dark-accent] rounded-xl p-2 px-4 drop-shadow-lg">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-6 w-max">
              <div
                className={`flex gap-1 transition-colors items-center cursor-pointer border border-[--color-dark-accent-2] pl-3 pr-1 py-1 rounded-xl drop-shadow-lg`}
              >
                <span className="text-sm opacity-70 w-max">{item}</span>
                <button
                  type="button"
                  className="w-6 text-[--color-dark-accent-2] hover:text-[--color-light] transition-colors rounded-lg"
                  onClick={() => handleRemoveItem(item)}
                >
                  <IoIosClose size={20} />
                </button>
              </div>
            </div>
          ))}
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="p-1 bg-transparent flex-1 outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MultiSelectTextbox;
