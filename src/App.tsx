import { ReactNode } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import LoginScreen from "./views/logIn/screen.tsx";
import CheckInScreen from "./views/checkIn/screen.tsx";
import Home from "./views/home/header.tsx"

interface PrivateRoutes {
  element: ReactNode;
  isAuthenticated?: any;
  option?: string;
}

function App() {
  function PrivateRoute({ element, isAuthenticated, option }: PrivateRoutes) {
    return isAuthenticated ? element : <Navigate to="/" />;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home><h1>Inicio</h1></Home>} />
        <Route path="/guides" element={<Home><h1>Guias</h1></Home>} />
        <Route path="/collaborators" element={<Home><h1>Colaboradores</h1></Home>} />
        <Route
          path="/sds"
          element={<LoginScreen></LoginScreen>}
          // element={<PrivateRouteIsAuthenticated element={<LoginScreen />} />}
        />
        <Route path="/logIn" element={<LoginScreen></LoginScreen>} />
        <Route path="/checkIn" element={<CheckInScreen></CheckInScreen>} />
      </Routes>
    </div>
  );
}

export default App;
