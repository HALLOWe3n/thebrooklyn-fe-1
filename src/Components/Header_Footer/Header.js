import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.Header}>
      <h1 className={s.Logo}>
        <a className={s.Logo_Link} href="/">
          br
        </a>
      </h1>
      <div className={s.Menu}>
        <NavLink className={s.Menu_Items} to="/favorites">
          favorites
        </NavLink>
        <NavLink className={s.Menu_Items} to="/popular">
          popular
        </NavLink>
        <NavLink className={s.Menu_Items} to="/albums">
          albums
        </NavLink>
        <NavLink className={s.Menu_Items__Last} to="/whats_new">
          what's new?
        </NavLink>

        <button className={s.Login}>LOG IN</button>
        <button className={s.Sign}>SIGN UP</button>
      </div>
    </header>
  );
};

export default Header;
