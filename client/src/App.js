import React from "react";
import { useRoutes } from "./routes";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  let IsAuthenticated = false;
  const routes = useRoutes(IsAuthenticated);

  return (
    <>
      <Router>
        {IsAuthenticated && <Navbar />}
        <div className="container">{routes}</div>
      </Router>
    </>
  );
}

export default App;
