import styles from "./TextArea.module.css";

interface TextAreaProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({ onChange }: TextAreaProps) => {
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
      />
    </div>
  );
};

export default TextArea;
