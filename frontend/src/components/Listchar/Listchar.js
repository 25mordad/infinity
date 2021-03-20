import React , { useState, useEffect }   from 'react';

import Character from './Character/Character';
import { useSelector } from 'react-redux';

const Listchar = () => {

  const characters = useSelector((state) => state.characters);


  return (
    (characters.length == 0) ?
    <div>
      <h1 >LIST</h1>
      loading
    </div> :
    <div >
      <h1 className ="" >LIST</h1>
        <div className =" container  content-width flex flex-wrap  my2 ">
        {characters['results'].map( (character) => (
          <Character key={character.id} character={character} />
        ) )}
        </div>
    </div>
  );


}

export default Listchar;
