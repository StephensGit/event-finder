/**
 * @Author: stephenmoran
 * @Date:   2019-11-06T19:06:06+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T23:34:04+00:00
 */

import React from 'react';
import PropTypes from 'prop-types';

class Weather extends React.Component {

  render()  {
    return(
      <div className="col-lg-3 weather">
        <p className="weatherCity">{this.props.city}</p>
          { !this.props.weatherTemp  ? <p className="weatherTemp">{this.props.weatherTemp}</p> : <p className="weatherTemp">{Math.round(this.props.weatherTemp-273.15)}°</p> }
        <p className="weatherDesc">{this.props.weatherDesc}</p>
      </div>
    );
  }
}

// Prop Types
Weather.propTypes = {
  weatherDesc: PropTypes.string.isRequired
}

export default Weather;
