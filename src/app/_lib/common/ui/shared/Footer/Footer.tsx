'use client'

import React from "react";
import Image from "next/image";

import style from "./Footer.module.scss";
import footer_logo from '../../assets/images/header_logo_.jpg';

export const Footer = ({ }: {}) => {

  return (
    <div className={style.footer_main}>
      <div className={style.footer_main_flex}>
        <div className={style.footer_logo_social_flex}>
          <Image
            src={footer_logo}
            width={165}
            height={70}
            alt="header logo"
            className={style.footer_logo}
          />
          <div className={style.footer_social_div}>
            <div className={style.footer_social_contacts_div}>
              <p className={style.footer_social_contact}>Telephone: (+374)77-97-73-34</p>
              <p className={style.footer_social_contact}>Address: Dilijan, Village of Haghartsin</p>
              <p className={style.footer_social_contact}>Email: dilijanhorseriding@gmail.com</p>
            </div>
            <div className={style.footer_social_icons_div}>
              <img src={footer_logo.src} alt="instagram_icon" width={50} height={50} />
              <img src={footer_logo.src} alt="instagram_icon" width={50} height={50} />
            </div>
          </div>
        </div>
        <div className={style.footer_mid_div_flex}>
          <h3 className={style.footer_mid_div_title}>Come feel the breath of the mountains</h3>
          <p className={style.footer_mid_div_text}>
            Dilijan Horseriding-ը նախ և առաջ պրոեկտ է,
            որով ապրում ու զարգանում է գյուղը, ի
            շնորհիվ մեր նախաձեռնության շատ տուրիզմի
            ուղղություններ Տավուշի մարզում դարձան էլ
            ավելի պոպուլյառ, բացվեցին մի շարք հյուրատներ
            ու մարդիկ սկսեցին մտածել Հայրենի բնաշխարհում
            ապրելու ու արարելու մասին: Մեր գլխավոր
            առաքելությունն է մարդկանց մեջ սերմանել սերը դեպի
            բնությունը, լեռներն ու կենդանիները, և դա է պատճառը,
            որ մեր 1000 ավոր հյուրեր գալով մեզ մոտ միշտ գտնում
            ու իրենց հետ տանում են՝ ՍԱՐԵՐ ՁՈՐԵՐ ՈՒ ԼԻ՜ ՔԸ ՍԵՐ
          </p>
        </div>
        <div className={style.footer_map_div}>
          <p className={style.footer_map_title}>We are on the map</p>
          <div className={style.footer_map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.415777499316!2d44.97570177550167!3d40.77487263376502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404055567b9935e5%3A0x17606dbcb9a0e871!2sDilijan%20Horse%20riding!5e0!3m2!1sru!2sam!4v1720170929648!5m2!1sru!2sam" width={'100%'} height={'100%'} style={{ border: 0 }} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;