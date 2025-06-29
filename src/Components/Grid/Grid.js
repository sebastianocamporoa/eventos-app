import styles from './Grid.module.css';
import React, { useEffect } from 'react';
import Card from '../Card/Card';
import AnimatedPage from '../../Containers/AnimatedPage/AnimatedPage';
import { v4 as uuidv4 } from 'uuid';

const Grid = props => {
    const {
        shownEvents,
        reviewDisplay,
        handleLike,
        handleHoverEvent,
        hoverState,
        grid,
        search,
        searching,
        handleSelectEvent
    } = props;

    useEffect(() => {
        if (grid === false) {
            if (document.getElementsByClassName('gridContainer')) {
                let grid = document.getElementById('gridContainer')
                grid.className = styles.noGrid
            }
        } else if (grid) {
            if (document.getElementById('gridContainer').className === styles.noGrid) {
                let grid = document.getElementById('gridContainer')
                grid.className = styles.gridContainer
            }
        }
    }, [grid])

    return (
        <>
            <div className={styles.reviews} style={{ display: reviewDisplay ? "flex" : "none" }}>
                <h2>Aún no hay reseñas!</h2>
                <h3>Protno podrás dejar las tuyas.</h3>
            </div>
            <div className={styles.gridContainer} style={{ display: reviewDisplay ? "none" : "grid" }} id="gridContainer">
                {searching === false ? shownEvents.map((event, i) => {
                    return <Card
                        event={event}
                        key={event.name}
                        handleLike={handleLike}
                        handleHoverEvent={handleHoverEvent}
                        handleSelectEvent={handleSelectEvent}
                        hoverState={hoverState}
                    />
                }) : shownEvents.map((event, i) => {
                    if (event.name.toLowerCase().includes(search.toLowerCase())) {
                        return <Card
                            event={event}
                            key={event.name}
                            handleLike={handleLike}
                            handleHoverEvent={handleHoverEvent}
                            handleSelectEvent={handleSelectEvent}
                            hoverState={hoverState}
                        />
                    }
                })}
            </div>
        </>
    );
}

export default Grid;