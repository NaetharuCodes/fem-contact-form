import styles from "./Checkbox.module.css";

interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

const Checkbox = ({ text, checked, onChange, required }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="consent">
        {text} {required && <span className={styles.required}>*</span>}
      </label>
      <input
        className={`${styles.input} ${checked && "checked"}`}
        type="checkbox"
        id="consent"
        name="consent"
        onChange={onChange}
        checked={checked}
        required={required}
      />
      <span className={styles.checkmark}></span>
    </div>
  );
};

export default Checkbox;
