import styles from "./Checkbox.module.css";

interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox = ({ text, checked, onChange }: CheckboxProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="consent">
        {text} <span className={styles.required}>*</span>
      </label>
      <input
        className={styles.input}
        type="checkbox"
        name="consent"
        onChange={onChange}
        checked={checked}
      />
    </div>
  );
};

export default Checkbox;
