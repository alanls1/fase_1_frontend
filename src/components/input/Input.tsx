import "./Input.scss";

interface prop {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  max?: string | number | undefined;
  min?: string | number | undefined;
  maxLength?: number | undefined;
  title?: string | undefined;
  step?: string | number | undefined;
}

const Input = ({
  name,
  onChange,
  placeholder,
  required,
  type,
  value,
  max,
  maxLength,
  min,
  title,
  step,
}: prop) => {
  return (
    <input
      className="input"
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      max={max}
      min={min}
      maxLength={maxLength}
      title={title}
      step={step}
    />
  );
};

export default Input;
