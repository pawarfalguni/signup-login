import React from "react";
import footerstyles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={footerstyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2024 Centralogic Assignment</p>
          </div>

          <div className="col-md-6" id={footerstyles.end}>
            <p>Designed by Miss Falguni Pawar !!!</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
