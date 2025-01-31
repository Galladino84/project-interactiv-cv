import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = ({ language, onLanguageChange }) => {
  const [personalInfo, setPersonalInfo] = useState(null);

  // Carica i dati JSON in base alla lingua selezionata
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/personal_info_${language}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPersonalInfo(data))
      .catch((err) => console.error("Errore nel caricamento dei dati:", err));
  }, [language]);

  if (!personalInfo) {
    return <div className="text-white p-3">Caricamento...</div>;
  }

  return (
    <aside className="d-flex flex-column bg-primary align-items-center text-white p-3 vh-100">
      {/* Foto Profilo */}
      <div className="text-center mb-3">
      <img
  src={`${import.meta.env.BASE_URL}${personalInfo.profileImage}` || `${import.meta.env.BASE_URL}vite.svg`}
  alt="Foto Profilo"
  className="rounded-circle"
  width="100"
  height="100"
/>

      </div>

      {/* Nome e Posizione */}
      <h4>{personalInfo.name}</h4>
      <p className="small">{personalInfo.location}</p>

      {/* Contatti */}
      <div className="mt-3">
        <h6>📞 {personalInfo.phone}</h6>
        <h6>📧 {personalInfo.email}</h6>
      </div>

      {/* Sezioni con Accordion */}
      <div className="mt-4">
        <button className="btn btn-primary text-white w-100 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#bio">
          📖 Bio
        </button>
        <div className="collapse text-center" id="bio">
          <p className="small">{personalInfo.bio}</p>
        </div>

        <button className="btn btn-primary text-white w-100 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#hobby">
          🎮 Hobby
        </button>
        <div className="collapse text-center" id="hobby">
          <p className="small">{personalInfo.hobby}</p>
        </div>

        <button className="btn btn-primary text-white w-100 mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#goals">
          🎯 {language === "ita" ? "Obiettivi" : "Objectives"} 
        </button>
        <div className="collapse text-center" id="goals">
          <p className="small">{personalInfo.goals}</p>
        </div>
      </div>

      {/* Selettore Lingua */}
      <div className="mt-auto">
        <button
          className="btn btn-light w-100"
          onClick={() => onLanguageChange(language === "ita" ? "eng" : "ita")}
        >
          🌍 {language === "ita" ? "Traduci in Inglese" : "Translate in italian"}
        </button>
        
      </div>
    </aside>
  );
};

export default Sidebar;
