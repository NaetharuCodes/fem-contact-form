import styles from "./App.module.css";
import TextInput from "./components/TextInput/TextInput";

const App = () => {
  const tempValue = "Temp";

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1 className={styles.header}>Contact Us</h1>
        <TextInput
          labelText="First Name"
          id="firstName"
          value={tempValue}
          onChange={() => "Hi"}
          required
        />
        <TextInput
          labelText="Last Name"
          id="firstName"
          value={tempValue}
          onChange={() => "Hi"}
        />
        <TextInput
          labelText="Email Address"
          id="firstName"
          value={tempValue}
          onChange={() => "Hi"}
        />
      </form>
    </div>
  );
};

export default App;
