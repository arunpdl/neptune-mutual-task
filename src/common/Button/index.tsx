import styles from "./button.module.css";

interface ButtonProps {
  children: React.ReactNode | string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "default" | "error";
  icon?: React.ReactNode;
  disabled?: boolean;
  [x: string]: any;
}

const Button = ({
  children,
  onClick,
  type,
  variant = "default",
  icon,
  disabled = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`${styles.btn} ${styles[variant]}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
