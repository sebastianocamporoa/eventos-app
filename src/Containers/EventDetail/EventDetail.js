import styles from './EventDetail.module.css';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedEventDetail from '../AnimatedPage/AnimatedEventDetail';
import NavBar from '../../Components/NavBar/NavBar';
import { ReactComponent as Arrow } from "../../Resources/image/arrow.svg";
import { ReactComponent as Up } from "../../Resources/image/up.svg";
import { ReactComponent as Down } from "../../Resources/image/down.svg";
import { ReactComponent as Like } from "../../Resources/image/like.svg";
import Slider from '../../Components/Slider/Slider';
import events from '../../utils/events';
import AnimatedText from '../AnimatedPage/AnimatedText';
import templateEvent from '../../utils/templateEvent';

const EventDetail = props => {
  const {
    handleHover,
    hoverState,
    handleHome,
    landingPage,
    search,
    searching,
    handleSearch,
    handleSearchSubmit,
    browsing,
    handleBrowse,
    selectedEvent,
    setSelectedEvent,
    allEvents,
    extended,
    setExtended,
    textExtended,
    setTextExtended,
  } = props;

  let { eventId } = useParams();
  const location = useLocation();
  const [carouselState, setCarouselState] = useState(0);

  const incrementCarousel = (e) => {
    if (carouselState === 3) {
      setCarouselState(0);
    } else {
      setCarouselState(carouselState + 1);
    }
  }

  const decrementCarousel = (e) => {
    if (carouselState === 0) {
      setCarouselState(3);
    } else {
      setCarouselState(carouselState - 1);
    }
  }

  const extendText = () => {
    setTextExtended(!textExtended);
  }

  const handleExtend = (e) => {
    if (document.getElementById("20").innerHTML === "More") {
      document.getElementById("20").className = "aboutBottom";
    } else if (document.getElementById("20").innerHTML === "Hide") {
      document.getElementById("20").className = "aboutBottomClosed";
    }
    setExtended(!extended);
    if (textExtended === false) {
      setTimeout(extendText, 500);
    } else {
      setTextExtended(!textExtended);
    }
  }

  return (
    <>
      <div className={styles.eventpage}>
        <NavBar
          handleHover={handleHover}
          hoverState={hoverState}
          handleHome={handleHome}
          browsing={browsing}
          landingPage={landingPage}
          search={search}
          searching={searching}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
        />

        <AnimatedEventDetail>
          <div className={styles.eventpageContent}>
            <header>
              <button
                style={{ color: hoverState[19].hovered ? "#92f" : "#cccccc" }}
                className={styles.goBack}
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleBrowse}
                id="19"
                aria-label='Back'
              >
                <Arrow style={{ fill: hoverState[19].hovered ? "#92f" : "#cccccc" }} className={styles.arrow} />
                Eventos
              </button>

              <h1>{selectedEvent ? selectedEvent.name : templateEvent.name}</h1>
            </header>

            <section className={styles.event}>
              {<Slider
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
                allEvents={allEvents}
                incrementCarousel={incrementCarousel}
                decrementCarousel={decrementCarousel}
                carouselState={carouselState}
                setCarouselState={setCarouselState}
                hoverState={hoverState}
                handleHover={handleHover}
              />}
              <div className={styles.eventInfo}>
                <div className={styles.about}>
                  <div className={styles.aboutTop}>
                    <h2>Descripción</h2>
                    <p>{selectedEvent ? selectedEvent.desc : templateEvent.desc}</p>
                  </div>
                  <div
                    className={extended ? `${styles.conditionalOpen} ${styles.aboutBottom}` : `${styles.conditionalClose} ${styles.aboutBottomClosed}`}
                    id="about"
                  >
                    <AnimatedText>
                      <div className={textExtended ? styles.open : styles.closed}>
                        <a href={selectedEvent ? selectedEvent.link : templateEvent.link} target="_blank">{selectedEvent ? selectedEvent.name : "No"} Website</a>
                        <h4>Fecha: {selectedEvent ? selectedEvent.date : templateEvent.release}</h4>
                        <h4>Presencialidad: {selectedEvent ? selectedEvent.type : templateEvent.platforms}</h4>
                        <h4>Ubicación: {selectedEvent ? selectedEvent.location : templateEvent.genre}</h4>
                      </div>
                    </AnimatedText>

                    <button
                      id="20"
                      onClick={handleExtend}
                      onMouseEnter={handleHover}
                      onMouseLeave={handleHover}
                      className={hoverState[20].hovered ? styles.buttonHovered : styles.buttonNotHovered}
                      aria-label="Extend"
                    >
                      {extended ? "Ocultar" : "Detalles"}
                      {extended ? <Up className={styles.up} style={{ fill: hoverState[20].hovered ? "#fff" : "#cccccc" }} /> : <Up className={styles.down} style={{ fill: hoverState[20].hovered ? "#fff" : "#cccccc" }} />}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </AnimatedEventDetail>
      </div>
    </>
  );
}

export default EventDetail;