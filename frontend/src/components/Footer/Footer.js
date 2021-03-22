import React, { Component } from 'react';
import love from "../../images/love.svg";

class Footer extends Component {
  render() {

    return (
      <footer className="bg-navy">

     <div className="p4">
       
           <ul >
              <li className ="heavy" >Made with <span><img alt="like" className ="footer-icon pt2" src={love} /></span> by Mary.</li>
           </ul> 
     </div>
  </footer>
    );
  }
}

export default Footer;
