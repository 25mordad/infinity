import React , { useState, useEffect }   from 'react';

import Character from './Character/Character';
import { useSelector } from 'react-redux';
import goback from "../../images/goback.svg";
import gonext from "../../images/gonext.svg";




const Listchar = () => {

  const characters = useSelector((state) => state.characters);

  return (
    (characters.length == 0) ?
    <div>
    
      loading
    </div> :
    <div >

      <div className ="  margin-auto content-width my2">  
       <div className ="  flex">
         <div className ="icon-width1  lg-col-1 md-col-1 sm-col-1 xs-col-1 p4">  
         <img  className =" responsive"  src={goback} />  
        </div>
        <div className ="icon-width1  lg-col-11 md-col-10 sm-col-10 xs-col-10"> </div>
        <div className ="icon-width2  lg-col-1 md-col-1 sm-col-1 xs-col-1   p4 right-text  ">  
        <img  className ="responsive "  src={gonext} />  
        </div>
       </div>
      </div>


      
        <div className ="container content-width flex flex-wrap my2 ">
        {characters['results'].map( (character) => (
          <Character key={character.id} character={character} />
        ) )}
        </div>
    </div>
  );


}

export default Listchar;
