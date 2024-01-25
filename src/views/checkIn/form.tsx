import { Formik, useField } from "formik";
import { checkInValidationSchemas } from "../../backend/validationSchemas/chekIn.ts";
import { useNavigate } from "react-router-dom";

import "../fonts/Lemon-Regular.ttf";

interface InputInterface {
  name: string;
  placeholder: string;
}

type ValuesTypes = {
  email: string;
  password: string;
};

const FormikInputValue = ({ name, placeholder }: InputInterface) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div style={styles.inputContainer}>
      <label htmlFor={name} style={styles.inputTitle}>
        {placeholder}:
      </label>
      <input
        type="text"
        name={name}
        style={styles.input}
        value={field.value}
        onChange={(e) => helpers.setValue(e.target.value)}
        placeholder={placeholder}
      />
      {meta.error && <label>{meta.error}</label>}
    </div>
  );
};

export default function CheckInForm() {
  const navigate = useNavigate();
  const values = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={checkInValidationSchemas}
      initialValues={values}
      onSubmit={(values: ValuesTypes) => console.log(values)}
    >
      {({ handleSubmit }: any) => {
        return (
          <div style={styles.container}>
            <h1 style={styles.title}>Registrarse</h1>
            <FormikInputValue name="name" placeholder="Nombre" />
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue name="password" placeholder="password" />
            <button
              style={{ ...styles.loginButton, backgroundColor: "#0100ed" }}
              className="stratButton"
              onClick={handleSubmit}
            >
              <span>Registrarse</span>
            </button>
            <button
              style={{ ...styles.loginButton, backgroundColor: "#23d711" }}
              className="stratButton"
              onClick={() => navigate("/logIn")}
            >
              <span>Ingresar</span>
            </button>
          </div>
        );
      }}
    </Formik>
  );
}

const styles = {
  container: {
    display: "flex",
    width: "100%",
    heigth: "100%",
    flexDirection: "column",
    alingItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    width: "95%",
    position: "static",
  },
  title: {
    margin: "auto",
    padding: "20px",
    fontfamily: "Lemon",
  },
  inputTitle: {
    fontSize: "0.75rem",
    color: "#000000",
    fontWeight: "700",
    position: "relative",
    top: "0.5rem",
    margin: "0 0 0 7px",
    padding: "0 3px",
    background: "#e8e8e8",
    width: "fit-content",
  },
  input: {
    padding: "11px 10px",
    fontSize: "0.75rem",
    border: "2px #000000 solid",
    borderRadius: "5px",
    background: "#e8e8e8",
  },
  link: {
    margin: "auto",
  },
  loginButton: {
    margin: "10px 0",
    color: "#ffffff",
  },
};
