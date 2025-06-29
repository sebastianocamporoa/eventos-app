import React from "react";
import styles from "./Filters.module.css";
import { ReactComponent as Ratings } from "../../Resources/image/ratings.svg";
import { ReactComponent as Reviews } from "../../Resources/image/reviews.svg";
import { ReactComponent as Adventure } from "../../Resources/image/adventure.svg";

const Filters = props => {
  const {
    hoverState,
    handleHover,
    handleSelect,
    currentFilter
  } = props;

  return (
    <div className={styles.filters}>
      <h2>Filtro por presencialidad</h2>

      <div className={styles.globalFilters}>
        <div
          className={styles.filterDiv}
          id="8"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          <button
            className={styles.filterBtn}
            style={{ backgroundColor: (hoverState[8].hovered || currentFilter == "Virtual") ? "#fff" : "#2d2d2d" }}
            aria-label="Virtual"
          >
            <Reviews
              className={`${styles.filterSVG3} ${styles.Reviews}`}
              viewBox="0 0 48 48"
              style={{ fill: (hoverState[10].hovered || currentFilter == "Virtual") ? "#000000" : "#fff" }}
            />
          </button>
          Virtual
        </div>

        <div
          className={styles.filterDiv}
          id="9"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          <button
            className={`${styles.filterBtn2} ${styles.Ratings}`}
            style={{ backgroundColor: (hoverState[9].hovered || currentFilter == "Presencial") ? "#fff" : "#2d2d2d" }}
            aria-label="Presencial"
          >
            <Adventure
              className={styles.filterSVG2}
              style={{ fill: (hoverState[15].hovered || currentFilter == "Presencial") ? "#000000" : "#fff" }}
            />
          </button>
          Presencial
        </div>

        <div
          className={styles.filterDiv}
          id="10"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          <button
            className={`${styles.filterBtn3} ${styles.Reviews}`}
            style={{ backgroundColor: (hoverState[10].hovered || currentFilter == "Hibrido") ? "#fff" : "#2d2d2d" }}
            aria-label="Híbrido"
          >
            <Ratings
              className={`${styles.filterSVG2} ${styles.Ratings}`}
              style={{ fill: (hoverState[9].hovered || currentFilter == "Hibrido") ? "#000000" : "#fff" }}
            />
          </button>
          Híbrido
        </div>
      </div>
      <div className={styles.genreFilters}>
        <h2>Filtro por fecha</h2>

        <div
          className={styles.filterDiv}
          id="11"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          Hoy
        </div>

        <div
          className={styles.filterDiv}
          id="12"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          Esta semana
        </div>

        <div
          className={styles.filterDiv}
          id="13"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          Este mes
        </div>

        <div
          className={styles.filterDiv}
          id="14"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={handleSelect}
        >
          Este año
        </div>
      </div>
    </div>
  )
}

export default Filters;