import styles from './Slider.module.css';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ReactComponent as Left } from "../../Resources/image/left.svg";
import { ReactComponent as Right } from "../../Resources/image/right.svg";
import { ReactComponent as Dot } from "../../Resources/image/dot.svg";
import { useLocation } from 'react-router-dom';
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import templateEvent from '../../utils/templateEvent';

const Slider = props => {
  const {
    selectedEvent,
    setSelectedEvent,
    allEvents,
    incrementCarousel,
    decrementCarousel,
    carouselState,
    setCarouselState,
    hoverState,
    handleHover
  } = props;

  const [footageIndex, setFootageIndex] = useState(0);
  const slideRef = React.createRef();
  const location = useLocation();

  useEffect(() => {
    const selectedEventIndex = allEvents.findIndex(event => "/eventos/evento/" + event.surname === location.pathname);
    setSelectedEvent(allEvents[selectedEventIndex]);
  }, []);

  const properties = {
    duration: 6000,
    autoplay: false,
    transitionDuration: 800,
    arrows: false,
    infinite: true,
    easing: "ease"
  };

  const slideImages = [
    selectedEvent ? selectedEvent.footage[0] : null,
    selectedEvent ? selectedEvent.footage[1] : null,
    selectedEvent ? selectedEvent.footage[2] : null,
    selectedEvent ? selectedEvent.footage[3] : null,
  ];

  const templateImages = [
    templateEvent.footage[0],
    templateEvent.footage[1],
    templateEvent.footage[2],
    templateEvent.footage[3]
  ]

  const back = () => {
    if (carouselState > 0) {
      setCarouselState(carouselState - 1);
    } else {
      setCarouselState(3);
    }
    slideRef.current.goBack();
  }

  const next = () => {
    if (carouselState < 3) {
      setCarouselState(carouselState + 1);
    } else {
      setCarouselState(0);
    }
    slideRef.current.goNext();
  }

  const jumpToIndex = (e) => {
    console.log(e.target.id);
    let index = parseInt(e.target.id);
    console.log(index);
    setCarouselState(index);
    slideRef.current.goTo(index);
  }

  return (
    <div className={styles.slider}>
      <Slide ref={slideRef} {...properties}>
        {selectedEvent ? slideImages.map((each, index) => (
          <div
            key={index}
            className={styles.slide}
          >
            <img
              className={styles.currentImg}
              src={each}
              alt="sample"
            />
          </div>
        )) : templateImages.map((each, index) => (
          <div
            key={index}
            className={styles.slide}
          >
            <img
              className={styles.currentImg}
              src={each}
              alt="sample"
            />
          </div>
        ))}
      </Slide>

      <button
        className={styles.backwards}
        onClick={back}
        id="22"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        aria-label="Previous Picture"
      >
        <Left
          className={styles.left}
          style={{ fill: hoverState[22].hovered ? "#fff" : "#ccc" }}
        />
      </button>

      <button
        className={styles.forward}
        onClick={next} id="23"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        aria-label="Next Picture"
      >
        <Right
          className={styles.right}
          style={{ fill: hoverState[23].hovered ? "#fff" : "#ccc" }}
        />
      </button>
      <div className={styles.selectorContainer}>
        <button
          id="0"
          onClick={jumpToIndex}
          className={carouselState === 0 ? styles.buttonSelected : styles.button}
          aria-label="Jump to picture"
        >
        </button>
        <button
          id="1"
          onClick={jumpToIndex}
          className={carouselState === 1 ? styles.buttonSelected : styles.button}
          aria-label="Jump to picture"
        >
        </button>
        <button
          id="2"
          onClick={jumpToIndex}
          className={carouselState === 2 ? styles.buttonSelected : styles.button}
          aria-label="Jump to picture"
        >
        </button>
        <button
          id="3"
          onClick={jumpToIndex}
          className={carouselState === 3 ? styles.buttonSelected : styles.button}
          aria-label="Jump to picture"
        >
        </button>
      </div>
    </div>
  );
}

export default Slider;