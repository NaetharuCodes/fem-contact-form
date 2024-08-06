import { ChangeEvent, useEffect, useState } from "react";
import styles from "./App.module.css";
import TextInput from "./components/TextInput/TextInput";
import RadioSelect from "./components/RadioSelect/RadioSelect";
import TextArea from "./components/TextArea/TextArea";
import Checkbox from "./components/Checkbox/Checkbox";
import Button from "./components/Button/Button";
import SentModal from "./components/SendModal/SentModal";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
  message: string;
  consent: boolean;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [sent, setSent] = useState<boolean>(false);

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const closeModal = () => {
    setSent(false);
  };

  return (
    <div className={styles.container}>
      {sent && <SentModal closeModal={closeModal} />}

      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.header}>Contact Us</h1>
        <div className={styles.textInputContainer}>
          <TextInput
            labelText="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleFormChange}
            required
          />
          <TextInput
            labelText="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleFormChange}
            required
            error={false}
            errorText="You did gone mess up"
          />
          <TextInput
            labelText="Email Address"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleFormChange}
            required
          />
        </div>
        <RadioSelect
          heading="Query Type"
          name="queryType"
          options={["General Enquiery", "Support Request"]}
          required
          onChange={handleFormChange}
          currentOption={formData.queryType}
        />
        <TextArea
          value={formData.message}
          onChange={handleFormChange}
          required
        />
        <Checkbox
          text="I hearby consent to being contacted by the team"
          onChange={handleFormChange}
          checked={formData.consent}
          required
        />
        <Button text="Submit" />
      </form>
    </div>
  );
};

export default App;
