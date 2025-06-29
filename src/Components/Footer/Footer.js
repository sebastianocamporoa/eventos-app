import styles from './Footer.module.css';
import React from 'react';
import { ReactComponent as Logo } from "../../Resources/image/logo.svg";
import { ReactComponent as AppStore } from "../../Resources/image/appstorebadge.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTop}>
        <Logo className={styles.logo} />
        <h2>Eventos</h2>
      </div>

      <div className={styles.sections}>
        <div className={`${styles.section} ${styles.section1}`}>
          <h3 className={styles.first}>Sobre nosotros</h3>
          <h3>Quiénes somos</h3>
          <h3>Blog de eventos</h3>
          <h3>Trabaja con nosotros</h3>
        </div>

        <div className={`${styles.section} ${styles.section2}`}>
          <h3 className={styles.first}>Categorías</h3>
          <h3>Conferencias</h3>
          <h3>Meetups</h3>
          <h3>Bootcamps</h3>
          <h3>Webinars</h3>
        </div>

        <div className={`${styles.section} ${styles.section3}`}>
          <h3 className={styles.first}>Para organizadores</h3>
          <h3>Publicar un evento</h3>
          <h3>Guía de buenas prácticas</h3>
          <h3>Soporte a organizadores</h3>
        </div>

        <div className={`${styles.section} ${styles.section4}`}>
          <h3 className={styles.first}>Recursos</h3>
          <h3>Centro de ayuda</h3>
          <h3>Contáctanos</h3>
          <h3>Reportar problema</h3>
        </div>
      </div>

      <div className={styles.footerInfo}>
        <div className={styles.infoLeft}>
          <p>Esta plataforma fue creada con React y diseñada para amantes de los eventos tecnológicos.</p>
          <p>Inspirado en conferencias como React Conf, JS Fest y otros grandes encuentros.</p>
        </div>
        <div className={styles.infoRight}>
          <img className={styles.google} src={require("../../Resources/image/googleplaybadge.png")} alt="Google Play Badge" />
          <AppStore className={styles.apple} />
        </div>
      </div>

      <div className={styles.footerEnd}>
        <div className={styles.endLeft}>
          <h4>Privacidad</h4>
          <h4>Términos</h4>
          <h4>Cookies</h4>
          <h4>Legal</h4>
        </div>

        <div className={styles.endRight}>
          <img className={styles.social} src={require("../../Resources/image/twitter.png")} alt="Twitter Logo" />
          <img className={styles.social} src={require("../../Resources/image/instagram.png")} alt="Instagram Logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
