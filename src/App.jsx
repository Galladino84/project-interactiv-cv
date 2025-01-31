import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ExperienceTabs from "./components/ExperienceTabs";
import ExperienceList from "./components/ExperienceList";
import SkillsList from "./components/SkillsList";
import TechnologyInfo from "./components/TechnologyInfo";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [language, setLanguage] = useState("ita");
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-md-3">
          <Sidebar language={language} onLanguageChange={setLanguage} />
        </div>

        {/* Contenuto principale */}
        <div className="col-md-9 content bg-light p-4">
          <ExperienceTabs language={language} activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "experience" && <ExperienceList language={language} />}
          {activeTab === "skills" && <SkillsList language={language} />}
          {activeTab === "technology" && <TechnologyInfo language={language} />}

        </div>
      </div>
    </div>
  );
};

export default App;
