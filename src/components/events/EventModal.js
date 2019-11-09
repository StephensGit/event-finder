/**
 * @Author: stephenmoran
 * @Date:   2019-11-06T18:42:18+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T22:56:22+00:00
 */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const locationIcon = <FontAwesomeIcon icon={faMapMarker} />;
const calendarIcon = <FontAwesomeIcon icon={faCalendarDay} />;

let dateRetrieved;
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

function EventModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let newTime;
  let oldTime;

  let testEvnt = props.data._embedded.venues[0].city.name;
  const testDateEvent = props.data.dates.start.localDate;
  const dateRetrieved1 = new Date(testDateEvent);
  // Gets month of the year (0-11) according to local time. Month is zero-indexed.
  let month = dateRetrieved1.getMonth();
  // Gets day of the month (1-31) according to local time.
  let day = dateRetrieved1.getDay();
  // Gets day of the week (0-6) according to local time. Day of the week begins with Sunday (0) and ends with Saturday (6).
  let date = dateRetrieved1.getDate();
  // retrieve year, then add 1900 to get current date
  let year = dateRetrieved1.getYear();
  year += 1900;
  if (props.data.dates.start.localTime) {
    oldTime = props.data.dates.start.localTime;
    newTime = oldTime.substring(0, 5);
  } else {
    newTime = (
      <i
        className="em em-man-shrugging"
        aria-role="presentation"
        aria-label=""
      ></i>
    );
  }
  dayName = days[day];
  monthName = months[month];

  return (
    <>
      <Button
        className="topSpace btn-sm modalButton eventButton"
        variant="primary"
        onClick={handleShow}
      >
        Info
      </Button>

      <Modal
        id="modalCustom"
        className="modal"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modaleHeader" closeButton>
          <h2 className="eventName">{props.data.name}</h2>
        </Modal.Header>
        <Modal.Body>
          <ul className="inline">
            <p className="modalh2"></p>
            <p>
              <span className="locationIcon">{locationIcon}</span>
              {props.data._embedded.venues[0].name} -{" "}
              {props.data._embedded.venues[0].city.name}
            </p>
            <p>
              <span className="calendarIcon">{calendarIcon}</span>
              {dayName}, {date} {monthName}, {year} - {newTime}{" "}
            </p>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn eventButton">
            <a target="_blank" href={props.data.url}>
              Tickets
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EventModal;
