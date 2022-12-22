import React from "react";
import TmdbLogo from "../images/tmdb_logo3.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <h1>Powered by</h1>
      <a href="https://www.themoviedb.org/?language=en-GB">
        <img className="footerlogo" src={TmdbLogo} alt="logo" />
      </a>
    </footer>
  )
}

export default Footer;