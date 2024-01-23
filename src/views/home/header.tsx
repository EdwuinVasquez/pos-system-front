import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface HomeInterface {
  children: ReactNode;
}

export default function Home({ children }: HomeInterface) {
  const navigate = useNavigate();

  return (
    <>
      <header style={styles.header}>
        <div style={styles.logo}>Logo</div>
        <div style={styles.menu}>
          <a href="#" style={styles.menuItem}>
            Inicio
          </a>
          <a href="#" style={styles.menuItem}>
            Guías
          </a>
          <a href="#" style={{...styles.menuItem, marginRight: "0"}}>
            Colaboradores
          </a>
        </div>
        <div style={styles.authLinks}>
          <a onClick={() => navigate("/logIn")} style={styles.authLink}>
            Ingresar
          </a>
          <a onClick={() => navigate("/checkIn")} style={{...styles.authLink, marginRight: "10px"}}>
            Registrarse
          </a>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: "#3498db",
    width: "100vw",
    color: "#fff",
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginLeft: "10px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    marginRight: "20px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "16px",
  },
  authLinks: {
    display: "flex",
  },
  authLink: {
    marginRight: "10px",
    textDecoration: "none",
    color: "#fff",
    fontSize: "14px",
  },
};
