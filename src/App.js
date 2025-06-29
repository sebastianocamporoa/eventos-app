import logo from './logo.svg';
import styles from './App.module.css';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import EventList from './Containers/EventList/EventList';
import EventDetail from './Containers/EventDetail/EventDetail';
import NotFound from './Containers/NotFound/NotFound';
import { AnimatePresence } from "framer-motion";
import filterNames from './utils/filterNames';
import events from './utils/events';
import templateEvent from './utils/templateEvent';

function App() {
  const [currentFilter, setCurrentFilter] = useState("none");
  const [allEvents, setAllEvents] = useState(events);
  const [shownEvents, setShownEvents] = useState(allEvents);
  const [reviewDisplay, setReviewDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [overlap, setOverlap] = useState(false);
  const [searching, setSearching] = useState(false);
  const [browsing, setBrowsing] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(false);
  const [extended, setExtended] = useState(false);
  const [textExtended, setTextExtended] = useState(false);
  const [hoverState, setHoverState] = useState([
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    },
    {
      hovered: false,
      selected: false
    }
  ]);

  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname != "/eventos/" && location.pathname != "/eventos/browse" && selectedEvent === false) {
    let surname = location.pathname.substring(29);
    let currentEvent = events.find(event => event.surname === surname);
    if (currentEvent != undefined) {
      setSelectedEvent(currentEvent);
    } else {
      setSelectedEvent(templateEvent);
    }
  }

  async function handleBrowse() {
    setExtended(false);
    setTextExtended(false);
    setHoverState([...hoverState, hoverState[21].hovered = false]);
    navigate('/eventos/browse');
  }

  const handleHome = () => {
    setExtended(false);
    setTextExtended(false);
    setHoverState([...hoverState, hoverState[21].hovered = false]);
    navigate('/eventos/');
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearching(false);
  }

  const handleSearchSubmit = (e) => {
    setCurrentFilter("none");
    e.preventDefault();
    setSearching(true);

    if (location.pathname != "/eventos/browse") {
      navigate('/eventos/browse');
    }
  }

  const handleSelect = (e) => {
    setCurrentFilter(filterNames[e.target.id - 8]);
  }

  const handleSelectEvent = (e) => {
    if (e.target.tagName === "BUTTON") {
      return
    } else {
      setSelectedEvent(events[e.target.parentNode.id]);
      navigate(`/eventos/evento/${events[e.target.parentNode.id].surname}`);
    }
  }

  const handleLike = (e) => {
    let handledLike = allEvents.map((event, i) => {
      if (e.target.id == i) {
        event.isLiked = !event.isLiked
        return event
      } else {
        return event;
      }
    });

    setAllEvents(handledLike);
  }

  const clearFilter = () => {
    setCurrentFilter("none");
    setSearch("");
    setReviewDisplay(false);
  }

  const openEventPage = (e) => {
    let selectedEventSurname = e.target.id;
    navigate(`/eventos/evento/${selectedEventSurname}`);
  }

  const handleHover = (e) => {
    if (hoverState[e.target.id].selected) {
      return;
    }

    let newHoverState = hoverState.map((element, i) => {
      if (e.target.id == i) {
        element.hovered = !element.hovered;
        return element
      } else {
        return element;
      }
    });

    setHoverState(newHoverState);
  }

  const handleHoverEvent = (e) => {
    let handledHoveredEvent = allEvents.map((event, i) => {
      if (e.target.id == i) {
        event.isHovered = !event.isHovered
        return event
      } else {
        return event;
      }
    });

    setAllEvents(handledHoveredEvent);
  }

  useEffect(() => {
    setOverlap(false);

    if (location.pathname === "/eventos/") {
      setBrowsing(false);
    } else {
      setBrowsing(true);
    }

    if (location.pathname != "/eventos/browse") {
      document.body.style.overflow = "hidden";

    } else if (location.pathname === "/eventos/browse") {
      document.body.style.overflow = "scroll";
    }
  }, [location.pathname])

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<EventList
          handleHover={handleHover}
          handleSelect={handleSelect}
          hoverState={hoverState}
          currentFilter={currentFilter}
          shownEvents={shownEvents}
          setShownEvents={setShownEvents}
          clearFilter={clearFilter}
          reviewDisplay={reviewDisplay}
          setReviewDisplay={setReviewDisplay}
          allEvents={allEvents}
          setAllEvents={setAllEvents}
          handleLike={handleLike}
          handleHoverEvent={handleHoverEvent}
          handleSelectEvent={handleSelectEvent}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          search={search}
          searching={searching}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          setHoverState={setHoverState}
          openEventPage={openEventPage}
        />} />
        <Route path="/eventos/browse" element={<EventList
          handleHover={handleHover}
          handleSelect={handleSelect}
          hoverState={hoverState}
          currentFilter={currentFilter}
          shownEvents={shownEvents}
          setShownEvents={setShownEvents}
          clearFilter={clearFilter}
          reviewDisplay={reviewDisplay}
          setReviewDisplay={setReviewDisplay}
          allEvents={allEvents}
          setAllEvents={setAllEvents}
          handleLike={handleLike}
          handleHoverEvent={handleHoverEvent}
          handleSelectEvent={handleSelectEvent}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          search={search}
          searching={searching}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          setHoverState={setHoverState}
          openEventPage={openEventPage}
        />} />
        <Route path="/eventos/evento/:eventId" element={<EventDetail
          handleHover={handleHover}
          hoverState={hoverState}
          handleLike={handleLike}
          handleSelectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
          setSelectedEvent={setSelectedEvent}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          search={search}
          searching={searching}
          browsing={browsing}
          handleBrowse={handleBrowse}
          handleHome={handleHome}
          setHoverState={setHoverState}
          allEvents={allEvents}
          extended={extended}
          setExtended={setExtended}
          textExtended={textExtended}
          setTextExtended={setTextExtended}
          openEventPage={openEventPage}
        />} />
        <Route path="*" element={<NotFound
          hoverState={hoverState}
          handleHome={handleHome}
          handleHover={handleHover}
          browsing={browsing}
          search={search}
          searching={searching}
          handleSearch={handleSearch}
          handleSearchSubmit={handleSearchSubmit}
          handleBrowse={handleBrowse}
          openEventPage={openEventPage}
        />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
