import Form from "@/modules/Form";
import Dashboard from "@/modules/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";

type ProtectRouteProps = {
  children: JSX.Element | JSX.Element[];
};

const ProtectRoute = ({ children }: ProtectRouteProps) => {
  const isLoggedIn = sessionStorage.getItem("user:token") !== null;

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" />;
  }

  if (
    isLoggedIn &&
    ["/sign-in", "/sign-up"].includes(window.location.pathname)
  ) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Dashboard />
          </ProtectRoute>
        }
      />
      <Route
        path="/sign-in"
        element={
          <ProtectRoute>
            <Form isSignInPage />
          </ProtectRoute>
        }
      />
      <Route
        path="/sign-up"
        element={
          <ProtectRoute>
            <Form />
          </ProtectRoute>
        }
      />
    </Routes>
  );
}

export default App;
