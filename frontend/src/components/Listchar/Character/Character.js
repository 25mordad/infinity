import React  from 'react';
import like from "../../../images/like.svg";
import likefull from "../../../images/likefull.svg";
import './style.css';

const Character = ({ character }) => {
const charLink = "/character/"+ character.id;

  return (
    <div className ="lg-col-3 md-col-4 sm-col-6 xs-col-12  "   >
      <div className ="box-shadow rounded rick-border bg-black m3">

      <a href={charLink} ><img className ="rounded-top responsive  " src={character.image} /></a>
      <br/>
      <div className ="p2 px3">
      <h3 className="rick-color "> {character.name}</h3>

      <div className =" relative">

        <div>
        <p>{character.status} - {character.gender} </p> 
        </div>
        <div className ="absolute-bottom  lg-col-2 md-col-2 sm-col-2 xs-col-2">
        <img  className =" responsive  " src={likefull} />  
       </div>

        
      </div>
      
      </div>

    </div>
     </div>
  );
}

export default Character;
