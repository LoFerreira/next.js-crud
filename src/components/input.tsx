interface InputProps {
  label: string;
  type?: "text" | "number";
  value: any;
  onChange?: (value: any) => void;
  readonly?: boolean;
  className?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2">{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={(e) => props.onChange?.(e.target.value)}
        readOnly={props.readonly}
        placeholder={props.placeholder}
        className={`
        border border-purple-500 rounded-lg
        focus:outline-none bg-gray-100
        px-4 py-2 ${props.readonly ? "" : "focus:bg-white"}
        `}
      />
    </div>
  );
};

export default Input;
