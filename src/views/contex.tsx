import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CookiesToken } from "../backend/class/cookies.ts";
import Cookies from "js-cookie";

export const DataContext = createContext<any>(null);
export function DataContextProvider(props: any) {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState("");
  const [tokenValid, setTokenValid] = useState(false);

  const valor = {
    token,
    setToken,
  };

  const isTokenValid = async () => {
    const cookieToken = Cookies.get("miToken");

    if (cookieToken) {
      try {
        const dataToken = await CookiesToken(cookieToken);
        if (!dataToken.result.data) return false;
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  };

  const checkTokenValidity = async () => {
    const currentPath = location.pathname;
    if (!(await isTokenValid())) {
      Cookies.remove("miToken");
      setTokenValid(false);
      setToken("");

      if (!currentPath.includes("cambiarClave")) {
        navigate("/");
      }
    } else {
      setTokenValid(true);
    }
  };

  const handleInstance = (url: any) => {
    setTokenValid(true);
    navigate(url);
  };

  const handleCookies = async (cookieToken: string) => {
    let dataToken = await CookiesToken(cookieToken);
    if (!dataToken.result.data) return;
    dataToken = dataToken.result.data;

    try {
      switch (dataToken.type.toLocaleString().toLowerCase()) {
        case "":
          handleInstance("home");
          break;
        default:
          throw new Error(`Login failed: ${dataToken.type} no identificado`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cookieToken = Cookies.get("miToken");

    if (cookieToken) {
      handleCookies(cookieToken);
      setToken(cookieToken);
    }
  }, []);

  useEffect(() => {
    checkTokenValidity();

    if (tokenValid) {
      const intervalId = setInterval(() => {
        checkTokenValidity();
      }, 15 * 60 * 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [token, tokenValid]);

  return (
    <>
      <DataContext.Provider value={valor}>
        {props.children}
      </DataContext.Provider>
    </>
  );
}

export function useDataContex() {
  const contex = useContext(DataContext);

  if (!contex) {
    throw new Error("No existe ningun contexto");
  }
  return contex;
}
