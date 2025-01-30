import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [language, setLanguage] = useState("ita");

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        <div className="col-md-3">
          <Sidebar language={language} onLanguageChange={setLanguage} />
        </div>

        <div className="col-md-9 content bg-light p-4">
          <h1>Benvenuto!</h1>
          <p>Questa è l'area principale del contenuto.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
