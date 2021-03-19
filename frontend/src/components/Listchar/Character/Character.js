import React  from 'react';




const Character = ({ character }) => {

const charLink = "/character/"+ character.id;

  return (
    <div>
      {character.name}
      <br/>
      {character.status}
      <br/>
      <a href={charLink} ><img src={character.image} /></a>
      <br/>
    </div>
  );
}

export default Character;
