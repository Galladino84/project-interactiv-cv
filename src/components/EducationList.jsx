import React, { useState, useEffect } from "react";

const EducationList = ({ language }) => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/formazione_${language}.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setEducationData(data.education))
      .catch((err) => console.error("Errore nel caricamento dei dati:", err));
  }, [language]);

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold">📚 {language === "ita" ? "Formazione" : "Education"}</h3>
      <ul className="list-group">
        {educationData.length > 0 ? (
          educationData.map((edu, index) => (
            <li key={index} className="list-group-item">
              <h5>{edu.title}</h5>
              <p className="small">{edu.school} ({edu.year})</p>
              <p className="text-muted">{edu.description}</p>
            </li>
          ))
        ) : (
          <li className="list-group-item text-muted">❌ {language === "ita" ? "Nessuna formazione trovata" : "No education found"}</li>
        )}
      </ul>
    </div>
  );
};

export default EducationList;
