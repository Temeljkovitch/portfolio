import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} Goran Temeljkovitch - Todos os direitos reservados.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
