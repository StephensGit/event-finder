/**
 * @Author: stephenmoran
 * @Date:   2019-10-29T22:40:01+00:00
 * @Last modified by:   stephenmoran
 * @Last modified time: 2019-10-29T22:46:57+00:00
 */
 import React from 'react';
 import {Link} from 'react-router-dom';

 class Error extends React.Component {
   render()  {
     return(
       <div>
         <h2>Inavlid entry, please make follow guidelines!</h2>
         <p>Contact us <Link to ='/' >here</Link> </p>
       </div>
     );
   }
 }

 export default Error;
