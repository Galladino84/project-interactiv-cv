import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [language, setLanguage] = useState("ita");

  return (
    <div className="container-fluid h-100">
  <div className="row h-100">
    <div className="col-md-3 d-flex flex-column">
      <Sidebar language={language} onLanguageChange={setLanguage} />
    </div>

    <div className="col-md-9 d-flex align-items-center justify-content-center bg-light p-5">
      <div>
        <h1 className="fw-bold">Benvenuto!</h1>
        <p className="lead">Questa è l'area principale del contenuto.</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default App;
