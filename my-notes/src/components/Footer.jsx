import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Earl Paquibol &copy; {year}</p>
    </footer>
  );
}

export default Footer;
