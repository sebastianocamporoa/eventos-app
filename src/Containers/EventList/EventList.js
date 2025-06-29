import styles from './EventList.module.css';
import React, { useEffect, useState } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { AnimatePresence } from "framer-motion";
import AnimatedPage from '../AnimatedPage/AnimatedPage';
import { ReactComponent as Grids } from "../../Resources/image/grid.svg";
import { ReactComponent as Columns } from "../../Resources/image/columns.svg";
import Filters from '../../Components/Filters/Filters';
import Grid from '../../Components/Grid/Grid';
import Footer from '../../Components/Footer/Footer';

const EventList = props => {
  const {
    handleHover,
    handleSelect,
    hoverState,
    currentFilter,
    shownEvents,
    setShownEvents,
    clearFilter,
    allEvents,
    setAllEvents,
    handleLike,
    handleHoverEvent,
    handleSelectEvent,
    handleSearch,
    handleSearchSubmit,
    search,
    searching,
    browsing,
    handleBrowse,
    handleHome,
    setHoverState,
  } = props;

  const [landingPage, setLandingPage] = useState(false);
  const [grid, setGrid] = useState(true);

  const handleLayoutSwitch = (e) => {
    setGrid(e.target.id === "grid");
  };

  useEffect(() => {
    let filtered = allEvents;

    const safeFilter = typeof currentFilter === 'string' ? currentFilter : "none";
    const normalizedFilter = safeFilter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    // Filtro por tipo
    if (["virtual", "presencial", "hibrido"].includes(normalizedFilter)) {
      filtered = filtered.filter(event =>
        event.type.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === normalizedFilter
      );
    }

    // Filtro por fecha
    else if (["hoy", "esta semana", "este mes", "este año"].includes(normalizedFilter)) {
      const today = new Date();

      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date);

        if (normalizedFilter === "hoy") {
          return eventDate.toDateString() === today.toDateString();
        }

        if (normalizedFilter === "esta semana") {
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay());
          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(startOfWeek.getDate() + 6);
          return eventDate >= startOfWeek && eventDate <= endOfWeek;
        }

        if (normalizedFilter === "este mes") {
          return (
            eventDate.getMonth() === today.getMonth() &&
            eventDate.getFullYear() === today.getFullYear()
          );
        }

        if (normalizedFilter === "este año") {
          return eventDate.getFullYear() === today.getFullYear();
        }

        return false;
      });
    }

    // Filtro por búsqueda
    if (search.trim() !== "") {
      filtered = filtered.filter(event =>
        event.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setShownEvents(filtered);
  }, [currentFilter, search, allEvents]);


  useEffect(() => {
    const unhoveredState = hoverState.map((element, i) => {
      if (i >= 25) return;
      return { ...element, hovered: false };
    });

    setHoverState(unhoveredState);
  }, []);

  return (
    <section className={styles.Browse} style={{ maxHeight: "1000vh", minHeight: "100vh" }}>
      <NavBar
        handleHover={handleHover}
        hoverState={hoverState}
        handleBrowse={handleBrowse}
        handleHome={handleHome}
        browsing={browsing}
        landingPage={landingPage}
        search={search}
        searching={searching}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
      />

      <AnimatedPage exitBeforeEnter>
        <div className={styles.browseContent}>
          <Filters
            hoverState={hoverState}
            handleHover={handleHover}
            handleSelect={handleSelect}
            currentFilter={currentFilter}
          />

          <div className={styles.list}>
            <h1>Explora eventos destacados</h1>
            <p>Filtra por tipo o busca por nombre</p>

            <div className={styles.applied}>
              <div className={styles.filterList}>
                <button
                  className={styles.filterButton}
                  aria-label="Current Filter"
                >
                  Filtrar por:
                  <span> {currentFilter}</span>
                </button>
                <button
                  className={`${styles.filterButton} ${styles.clearButton}`}
                  onClick={clearFilter}
                  aria-label="Clear Filters"
                >
                  Borrar filtros
                </button>
              </div>

              <div className={styles.displayStyle}>
                <p>Opciones de visualización:</p>
                <button
                  className={styles.displayBtn}
                  onClick={handleLayoutSwitch}
                  id="grid"
                  aria-label='Display grids'
                >
                  <Grids className={styles.displayItem} style={{ fill: grid ? "#e5e5e5" : "#6f6f6f" }} />
                </button>

                <button
                  className={styles.displayBtn}
                  onClick={handleLayoutSwitch}
                  id="columns"
                  aria-label='Display columns'
                >
                  <Columns className={styles.displayItem} style={{ fill: grid ? "#6f6f6f" : "#e5e5e5" }} />
                </button>
              </div>
            </div>

            <Grid
              shownEvents={shownEvents}
              handleLike={handleLike}
              handleHoverEvent={handleHoverEvent}
              grid={grid}
              search={search}
              searching={searching}
              handleSelectEvent={handleSelectEvent}
              hoverState={hoverState}
            />
          </div>
        </div>
      </AnimatedPage>
      <Footer />
    </section>
  );
};

export default EventList;
