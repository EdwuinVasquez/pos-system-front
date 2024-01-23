import { Formik, useField } from "formik";
import { loginValidationSchemas } from "../../backend/validationSchemas/login.ts";
import { useNavigate } from "react-router-dom";

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

export default function LoginForm() {
  const navigate = useNavigate();
  const values = {
    email: "",
    password: "",
  };

  return (
    <Formik
      validationSchema={loginValidationSchemas}
      initialValues={values}
      onSubmit={(values: ValuesTypes) => console.log(values)}
    >
      {({ handleSubmit }: any) => {
        return (
          <div style={styles.container}>
            <h1 style={styles.title}>Bienvenido</h1>
            <FormikInputValue name="email" placeholder="E-mail" />
            <FormikInputValue name="password" placeholder="password" />
            <div style={styles.link}>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
            <button
              style={{ ...styles.loginButton, backgroundColor: "#0100ed" }}
              className="stratButton"
              onClick={handleSubmit}
            >
              <span>Ingresar</span>
            </button>
            <button
              style={{ ...styles.loginButton, backgroundColor: "#23d711" }}
              className="stratButton"
              onClick={() => navigate("/checkIn")}
            >
              <span>Regresar</span>
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
