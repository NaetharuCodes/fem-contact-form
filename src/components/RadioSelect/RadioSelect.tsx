import styles from "./RadioSelect.module.css";

interface RadioSelectProps {
  heading: string;
  name: string;
  options: string[];
  required?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  currentOption: string;
}

const RadioSelect = ({
  heading,
  name,
  options,
  required,
  onChange,
  currentOption,
}: RadioSelectProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>
        {heading} <span className={styles.required}>{required ? "*" : ""}</span>
      </h2>
      {options.map((option) => (
        <label className={styles.radioButton} key={option}>
          <input
            className={styles.radioInput}
            type="radio"
            name={name}
            id={option}
            onChange={onChange}
            value={option}
            checked={option === currentOption}
          />
          <span className={styles.customRadio}></span>
          <span className={styles.label}>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioSelect;
