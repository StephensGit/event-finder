/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T17:01:36+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-11-08T23:18:25+00:00
 */

import React from 'react';
import {Link} from 'react-router-dom';

 class Contact extends React.Component {
   render()  {
     return(
       <div className = "container">
        <div className="aboutPage" style={aboutPage}>
          <h2 className="aboutPageh2" style={aboutPageh2}>EventFinder</h2>
          <p className="aboutPagep" > Browse events from around the world, just choose your city and dates. </p>
          <p className="aboutPagelink" >Back to home page <Link to ='/contact' >here</Link> </p>
        </div>
       </div>
     );
   }
 }

  const aboutPage = {
    color:"#333",
    marginTop: "20px"

  }
  const aboutPageh2 = {
    fontSize:"40px",
    fontWeight:"bold"
  }

  export default Contact;
