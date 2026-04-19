import React from "react";

type TextInputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const TextInput = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: TextInputProps) => {
  return (
    <div className="mb-3">
      <label className="block text-sm mb-1 text-gray-600">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border border-gray-300 shadow p-2 rounded-lg outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
      />
    </div>
  );
};

export default TextInput;
