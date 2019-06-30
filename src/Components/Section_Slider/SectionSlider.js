import React from "react";
import s from "./SectionSlider.module.css";
import SocialLinks from "../Social_Links/SocialLinks";

const SectionSlider = () => {
  return (
    <section className={s.MainWrapper}>
      <div className={s.InnerWrapper_Text}>
        <h2 className={s.Title}>the brooklyn</h2>
        <p className={s.Text}>Create you favorite playlist</p>
        <p className={s.Text_Soon}>comming soon</p>
        <SocialLinks />
      </div>
    </section>
  );
};

export default SectionSlider;
