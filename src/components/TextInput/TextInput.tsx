import styles from "./TextInput.module.css";

interface TextInputProps {
  labelText: string;
  id: string;
  value: string;
  onChange: () => string;
  required?: boolean;
}

const TextInput = ({
  labelText,
  id,
  value,
  onChange,
  required,
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
        value={value}
        onChange={onChange}
        className={styles.input}
      />
    </div>
  );
};

export default TextInput;
