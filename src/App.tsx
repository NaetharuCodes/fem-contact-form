import { ChangeEvent, useEffect, useState } from "react";
import styles from "./App.module.css";
import TextInput from "./components/TextInput/TextInput";
import RadioSelect from "./components/RadioSelect/RadioSelect";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  queryType: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
  });

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log("FORM DATA: ", formData);
  }, [formData]);

  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
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
      </form>
    </div>
  );
};

export default App;
