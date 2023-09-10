import Form from "@/modules/Form";
import Dashboard from "@/modules/Dashboard";
import { QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import { queryClient } from "@/configs/QueryClientProvider";

type ProtectRouteProps = {
  children: JSX.Element | JSX.Element[];
  auth?: boolean | undefined;
};

const ProtectRoute = ({ children, auth }: ProtectRouteProps) => {
  const isLoggedIn = sessionStorage.getItem("user:token") !== null;

  if (!isLoggedIn && auth) {
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
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectRoute auth={true}>
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
    </QueryClientProvider>
  );
}

export default App;
