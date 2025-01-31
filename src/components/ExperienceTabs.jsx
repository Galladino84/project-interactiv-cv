import React from "react";

const ExperienceTabs = ({ language, activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          {language === "ita" ? "Esperienze Lavorative" : "Work Experiences"}
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => setActiveTab("skills")}
        >
          {language === "ita" ? "Competenze" : "Skills"}
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "technology" ? "active" : ""}`}
          onClick={() => setActiveTab("technology")}
        >
          {language === "ita" ? "Tecnologie Utilizzate" : "Technologies Used"}
        </button>
      </li>
      <li className="nav-item">
        <button
          className={`nav-link ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          {language === "ita" ? "Formazione" : "Education"}
        </button>
      </li>
    </ul>
  );
};

export default ExperienceTabs;
