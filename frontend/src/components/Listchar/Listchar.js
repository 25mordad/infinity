import React , { useState, useEffect }   from 'react';

import Character from './Character/Character';
import { useSelector } from 'react-redux';

const Listchar = () => {

  const characters = useSelector((state) => state.characters);


  return (
    (characters.length == 0) ?
    <div>
      <h1>LIST</h1>
      loading
    </div> :
    <div>
      <h1>LIdsdST</h1>
        {characters['results'].map( (character) => (
          <Character character={character} />
        ) )}
    </div>
  );


}

export default Listchar;
