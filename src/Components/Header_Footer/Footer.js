import React from "react";
import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.Footer}>
      <h3 className={s.Text}>the brooklyn</h3>
      <div className={s.Wrapper_Links}>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.Instagram} />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.Facebook} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={s.Twitter} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
