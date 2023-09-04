interface ButtonProp {
  label: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
}

export default function Button({
  label,
  type,
  className,
  disabled,
}: ButtonProp) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none
                focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${className}`}
    >
      {label}
    </button>
  );
}
