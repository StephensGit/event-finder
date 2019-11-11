/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T17:17:00+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-09T22:42:58+00:00
 */

import React from "react";
import EventItem from "./EventItem";
import PropTypes from 'prop-types';

class Events extends React.Component {
  render() {
    return this.props.events.map(event => (
      <React.Fragment>
        <EventItem key={event.id} event={event} city={this.props.city} />
      </React.Fragment>
    ));
  }
}

// Prop Types
Events.propTypes = {
  events: PropTypes.array.isRequired
}

export default Events;
