import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

const EventList = (props) => {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => {
        const { id, title, location, date, image } = event;
        return (
          <EventItem
            key={id}
            id={id}
            title={title}
            location={location}
            date={date}
            image={image}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
