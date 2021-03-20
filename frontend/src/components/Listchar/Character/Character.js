import React  from 'react';
import './style.css';

const Character = ({ character }) => {
const charLink = "/character/"+ character.id;

  return (
    
    <div className ="lg-col-3 md-col-4 sm-col-6 xs-col-12 ">
   
      <div className ="  box-shadow rounded border-gray bg-black m3"> 
      
      <a   href={charLink} ><img  className ="rounded-top responsive  " src={character.image} /></a>
      <br/>
      <div className =" g-black1 p2 ">
      <h3> {character.name}</h3>
      {character.status}
      <br/>
      </div>
    </div>
     </div>
  );
}

export default Character;
