/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T17:24:37+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-09T22:42:17+00:00
 */

import React from "react";
import PropTypes from "prop-types";

class Form extends React.Component {
  render() {
    return (
      <div id="search" className="search col-md-12">
        <div className="card formCard">
          <form className="formSection" onSubmit={this.props.formSubmit}>
            <label className="label col-lg-3 col-md-3">
              <input
                className="col input"
                name="city"
                type="text"
                value={this.props.city}
                onChange={this.props.handleChange}
                placeholder="City..."
              />
            </label>
            <label className="label col-lg-3 col-md-3">
              <input
                className="col input"
                name="startDate"
                type="text"
                value={this.props.startDate}
                onChange={this.props.handleChange}
                placeholder="Start Date - (2019-10-21)"
              />
            </label>
            <label className="label col-lg-3 col-md-3">
              <input
                className="col input"
                name="endDate"
                type="text"
                value={this.props.endDate}
                onChange={this.props.handleChange}
                placeholder="End Date - (2019-10-22)"
              />
            </label>
            <button className="btn button col-lg-3 col-md-3" type="submit" value="Submit">{" "}Search{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

// PropTypes -- This should be whatever the name of the class is
// This is an array because it takes in an array
Form.propTypes = {
  formSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Form;
