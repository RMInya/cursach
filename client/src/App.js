import React from "react";
import { useRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import { useAuth } from "./hooks/auth.hook";
import { AuthContext } from "./context/Auth.context";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

function App() {
  const { token, login, logout, userId } = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  return (
    <>
      <AuthContext.Provider
        value={{ token, login, logout, userId, isAuthenticated }}
      >
        <Router>
          {isAuthenticated && <Navbar />}
          <div className="container">{routes}</div>
        </Router>
      </AuthContext.Provider>
    </>
  );
}

export default App;
