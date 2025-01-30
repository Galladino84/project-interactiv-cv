import React from 'react';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100 vw-100">
        {/* Sidebar 30% della larghezza */}
        <div className="col-md-3 d-flex flex-column sidebar">
          <Sidebar />
        </div>

        {/* Contenuto principale 70% della larghezza */}
        <div className="col-md-9 content bg-light">
          <h1>Benvenuto!</h1>
          <p>Questa è l'area principale del contenuto.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
