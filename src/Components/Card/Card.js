import styles from './Card.module.css';
import React from 'react';
import { ReactComponent as Like } from "../../Resources/image/like.svg";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';

const Card = props => {
  const {
    event,
    handleHover,
    hoverState,
    handleLike,
    handleHoverEvent,
    handleSelectEvent
  } = props;

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const location = useLocation();

  return (
    <motion.div
      className={hoverState[1].selected === false ? styles.card : event.id === 26 ? styles.fifa : event.id === 12 ? styles.tombraider : event.id === 3 ? styles.mariokart : event.id === 11 ? styles.minecraft : styles.cardHome}
      onClick={handleSelectEvent}
      id={event.id}
      style={{ margin: 0, padding: 0 }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <img src={event.cover} className={styles.img} alt="Imagen de portada del evento" />
      <h2 className={styles.name}>{event.name}</h2>
      <h3 className={styles.name}>{event.date}</h3>
    </motion.div>
  );
}

export default Card;