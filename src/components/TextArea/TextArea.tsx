import styles from "./TextArea.module.css";

interface TextAreaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  required?: boolean;
}

const TextArea = ({ onChange, required }: TextAreaProps) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="textArea">
        Message<span className={styles.required}>*</span>
      </label>
      <textarea
        className={styles.textArea}
        name="textArea"
        id="textArea"
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextArea;
