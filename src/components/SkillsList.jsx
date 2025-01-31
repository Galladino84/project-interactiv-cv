import React, { useState, useEffect } from "react";

const SkillsList = ({ language }) => {
  const [skills, setSkills] = useState({ hardSkills: [], softSkills: [] });

  useEffect(() => {
    const url = `/data/skills_${language}.json`;

    fetch(url)
      .then((res) => {
        console.log(`Tentativo di caricare: ${url}`);
        if (!res.ok) {
          throw new Error(`Errore HTTP! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Dati ricevuti:", data);
        setSkills(data);
      })
      .catch((err) => console.error("Errore nel caricamento dei dati:", err));
  }, [language]);

  return (
    <div className="p-3">
      <h3>💼 {language === "ita" ? "Hard Skills" : "Hard Skills"}</h3>
      <ul className="list-group mb-3">
        {skills.hardSkills && skills.hardSkills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))}
      </ul>

      <h3>🤝 {language === "ita" ? "Soft Skills" : "Soft Skills"}</h3>
      <ul className="list-group">
        {skills.softSkills && skills.softSkills.map((skill, index) => (
          <li key={index} className="list-group-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
