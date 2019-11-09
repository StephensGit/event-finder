/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T16:58:36+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T22:47:14+00:00
 */

import React from 'react';

class Banner extends React.Component {
  render() {
    return(
      <div className="labels my-auto col-lg-9">
        <h1 className="">Find the best</h1>
        <h1 className="">events worldwide!</h1>
        <p className="subHeadingBanner">Browse events from around the world, just choose your city and dates.</p>
      </div>
    );
  }
}

export default Banner;
