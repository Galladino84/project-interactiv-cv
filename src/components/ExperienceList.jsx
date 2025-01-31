import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const ExperienceList = ({ language }) => {
  const [experiences, setExperiences] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null); // Esperienza selezionata

  useEffect(() => {
    const filePath = `${import.meta.env.BASE_URL}/data/experiences_${language}.json`;
    
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
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{exp.role} - {exp.company}</h5>
                <p className="text-muted">{exp.period}</p>
                <p>{exp.description}</p>
              </div>
              <Button variant="primary" size="sm" onClick={() => setSelectedExperience(exp)}>
                📜 {language === "ita" ? "Maggiori dettagli" : "More details"}
              </Button>
            </li>
          ))}
        </ul>
      )}

      {/* Lightbox Modal */}
      {selectedExperience && (
        <Modal show={!!selectedExperience} onHide={() => setSelectedExperience(null)} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedExperience.role} - {selectedExperience.company}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>{language === "ita" ? "Periodo:" : "Period:"}</strong> {selectedExperience.period}</p>
            <p>{selectedExperience.more}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setSelectedExperience(null)}>
              {language === "ita" ? "Chiudi" : "Close"}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ExperienceList;
