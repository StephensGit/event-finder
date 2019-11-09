/**
 * @Author: stephenmoran
 * @Date:   2019-11-08T09:37:28+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T22:57:31+00:00
 */

import React from "react";

class Footer extends React.Component {
  render() {
    // Get the current year for the copyright
    const year = new Date().getFullYear();

    return (
      <footer id="main-footer" className="text-center p-4 footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <p>
                Copyright &copy;
                <span>{year}</span>
                <a className="footerLink" target="_blank" href="https://stephenmoran.ie">{" "}Stephen Moran</a>    
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
