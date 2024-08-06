import TickIcon from "../TickIcon/TickIcon";
import styles from "./SentModal.module.css";

interface SentModalProps {
  closeModal: () => void;
}

const SentModal = ({ closeModal }: SentModalProps) => {
  return (
    <div className={styles.container} onClick={closeModal}>
      <div className={styles.msgContainer}>
        <div className={styles.mainMessage}>
          <TickIcon />
          <div className={styles.mainMessageText}>Message Sent!</div>
        </div>
        <div className={styles.subMessage}>
          Thanks for completing the form. We'll be in touch soon!
        </div>
      </div>
    </div>
  );
};

export default SentModal;
