import React, { useState, useEffect } from "react";

const TechnologyInfo = () => {
  const [techData, setTechData] = useState([]);

  useEffect(() => {
    fetch("/data/technology_ita.json")
      .then((res) => res.json())
      .then((data) => setTechData(data))
      .catch((err) => console.error("Errore nel caricamento:", err));
  }, []);

  return (
    <div>
      <h3>Tecnologie Utilizzate</h3>
      <ul className="list-group">
        {techData.map((tech, index) => (
          <li key={index} className="list-group-item">{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechnologyInfo;
