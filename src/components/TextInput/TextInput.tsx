import styles from "./TextInput.module.css";

interface TextInputProps {
  labelText: string;
  id: string;
  name: string;
  value: string | undefined;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  error?: boolean;
  errorText?: string;
}

const TextInput = ({
  labelText,
  id,
  name,
  value,
  onChange,
  required,
  error,
  errorText,
}: TextInputProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {labelText}
        {required ? <div className={styles.required}>*</div> : null}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error ? styles.error : ""}`}
      />
      {error && <p className={styles.errorText}>{errorText}</p>}
    </div>
  );
};

export default TextInput;
