import React from 'react';

const Sidebar = () => {
  return (
    <aside className="d-flex flex-column align-items-start vh-100">
      <div className="text-center w-100">
        <img
          src="/path-to-image.jpg"
          alt="Profilo"
          className="rounded-circle mb-3"
          width="100"
        />
        <h4>Fabrizio Gallazzi</h4>
        <p>Besnate, Varese</p>
      </div>

      <hr className="w-100" />

      <nav className="nav flex-column w-100">
        <a href="#bio" className="nav-link text-white">
          Bio
        </a>
        <a href="#hobby" className="nav-link text-white">
          Hobby
        </a>
        <a href="#obiettivi" className="nav-link text-white">
          Obiettivi
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
