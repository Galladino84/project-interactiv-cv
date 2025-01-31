import React, { useState, useEffect } from "react";

const ExperienceList = ({ language }) => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const filePath = `/data/experiences_${language}.json`;
    
    fetch(filePath)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Dati Esperienze ricevuti:", data); // Debug in console
        setExperiences(data);
      })
      .catch((err) => console.error("Errore nel caricamento dei dati:", err));
  }, [language]);

  return (
    <div className="mt-4">
      <h3>{language === "ita" ? "Esperienze Lavorative" : "Work Experience"}</h3>
      {experiences.length === 0 ? (
        <p>⚠ Nessuna esperienza trovata.</p>
      ) : (
        <ul className="list-group">
          {experiences.map((exp, index) => (
            <li key={index} className="list-group-item">
              <h5 className="mb-1">{exp.role} - {exp.company}</h5>
              <p className="text-muted">{exp.period}</p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceList;
