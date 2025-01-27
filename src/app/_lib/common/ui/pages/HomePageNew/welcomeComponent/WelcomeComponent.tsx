'use client'


import React from "react";
import style from "./WelcomeComponent.module.scss";
import mediaStyle from './WelcomeComponentMedia.module.scss';

export const WelcomeComponent = ({ }: {}) => {

  return (
    <div className={`${style.welcome_main} ${mediaStyle.welcome_main}`}>
      <div className={`${style.welcome_main_opacity} ${mediaStyle.welcome_main_opacity}`}>
        <div className={`${style.welcome_content} ${mediaStyle.welcome_content}`}>
          <h1 className={`${style.welcome_content_title} ${mediaStyle.welcome_content_title}`}>Dilijan Horse Riding</h1>
          <p className={`${style.welcome_content_description} ${mediaStyle.welcome_content_description}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus non culpa perspiciatis ad id ab. Sint error
            inventore possimus? Enim ducimus fugit ratione eius a
            facilis totam voluptas sint esse?
          </p>
          <button className={`${style.welcome_content_btn} ${mediaStyle.welcome_content_btn}`}>Our Services</button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
