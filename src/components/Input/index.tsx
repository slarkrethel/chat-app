import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface InputProp {
  label: string;
  name?: string | undefined;
  className?: string | undefined;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder?: string | undefined;
  isRequired?: boolean | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?: ChangeEventHandler<Element> | undefined;
}

export default function Input({
  label,
  name,
  className,
  type = "text",
  placeholder,
  isRequired = true,
  value,
  onChange = () => {},
}: InputProp) {
  return (
    <div className="w-1/2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        value={value}
        required={isRequired}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} block bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5`}
      />
    </div>
  );
}
