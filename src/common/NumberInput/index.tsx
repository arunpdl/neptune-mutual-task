import styles from "./numberInput.module.css";

interface NumberInputProps {
  id: string;
  placeholder: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  [x: string]: any;
}

const numberPattern = "^[0-9]*.?[0-9]*$";

const NumberInput = ({
  id,
  placeholder,
  value,
  label,
  onChange,
  ...rest
}: NumberInputProps) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        {...rest}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        pattern={numberPattern}
        aria-label={label}
        aria-placeholder={placeholder}
      />
    </div>
  );
};

export default NumberInput;
