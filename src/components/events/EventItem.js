/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T17:17:07+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-12T00:13:51+00:00
 */

import React from "react";
import EventModal from "./EventModal";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

let monthIndex;
let monthName;
let dayName;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class EventItem extends React.Component {
  render() {
    // let testEvnt = this.props.event._embedded.venues[0].city.name;
    const testDateEvent = this.props.event.dates.start.localDate;
    const dateRetrieved1 = new Date(testDateEvent);
    // Gets month of the year (0-11) according to local time. Month is zero-indexed.
    let month = dateRetrieved1.getMonth();
    // Gets day of the month (1-31) according to local time.
    let day = dateRetrieved1.getDay();
    // Gets day of the week (0-6) according to local time. Day of the week begins with Sunday (0) and ends with Saturday (6).
    // let date = dateRetrieved1.getDate();
    dayName = days[day];
    monthName = months[month];
    // So we can access each event item details from this.props.event

    let eventNameString = this.props.event.name;
    if (eventNameString.length > 22)
      eventNameString = eventNameString.substring(0, 22);

    let genreUndefined = this.props.event.classifications[0].genre.name;
    if ((genreUndefined == "Undefined")) {
      genreUndefined = "Live Show";
    } else {
      genreUndefined = this.props.event.classifications[0].genre.name;
    }

    return (
        <div
          id={this.props.event.id}
          className="col-lg-4 col-md-6 col-sm-12 mb-5"
        >
          <div className="card eventCard events">
            <div className="card-body">
              <img
                className="card-img-top"
                src={this.props.event.images[1].url}
                height="200"
                alt="pic"
              />
              <h4 className="card-text genre">{genreUndefined}</h4>
              <h1
                className="card-title eventh1"
                style={{ fontWeight: "bold !important" }}
              >
                {eventNameString}
              </h1>
              <EventModal className="eventButton" data={this.props.event} />
            </div>
          </div>
        </div>
    );
  }
}

// Prop Types
EventItem.propTypes = {
  event: PropTypes.object.isRequired
}

export default EventItem;
