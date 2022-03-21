interface ButtonProps {
  color?: "green" | "blue" | "gray";
  className?: string;
  children: any;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const cor = props.color || "gray";
  console.log(`blue`);

  return (
    <button
      onClick={props.onClick}
      className={`
      bg-gradient-to-r from-${cor}-400 to-${cor}-700
  text-white px-4 py-2 rounded-md 
  ${props.className}
  `}
    >
      {props.children}
    </button>
  );
};

export default Button;
