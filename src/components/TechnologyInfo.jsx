import React, { useState, useEffect } from "react";

const TechnologyInfo = ({ language }) => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}/data/technology_${language}.json`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then(data => {
            console.log("Dati ricevuti:", data);
            setTechData(data.technologies);
        })
        .catch(err => console.error("Errore nel caricamento JSON:", err));
}, [language]);


return (
  <div className="p-4">
      <h3 className="text-lg font-bold">🛠️ Tecnologie usate</h3>
      <ul className="list-group">
          {techData.length > 0 ? (
              techData.map((tech, index) => (
                  <li key={index} className="list-group-item">{tech}</li>
              ))
          ) : (
              <li className="list-group-item text-muted">❌ Nessuna tecnologia trovata</li>
          )}
      </ul>
  </div>
);

};

export default TechnologyInfo;
