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
    <div>
      <div className ="bg-logo center margin-auto container" >
      <div className ="lg-col-12  md-col-12 sn-col-12 xs-col-12 flex flex-wrap mt4 pt4">

      <div className =" lg-col-1 md-col-1 sm-col-1 xs-col-1 p4">
         <img  className =" responsive"  src={goback} />
        </div>

        <div className =" lg-col-10 md-col-10 sm-col-10 xs-col-10"> 
        <h1 className =" text-navy  xs-hide text-72 heavy center margin-auto" >The Rick and Morty <br/>Infinity</h1></div>
        <div className =" lg-col-1 md-col-1 sm-col-1 xs-col-1 p4">
         <img  className =" responsive"  src={gonext} />
        </div>
      
      </div> 
      </div>
      <div className ="bg-gray  pt4 margin-min">
       

        <div className ="container content-width flex flex-wrap  ">
        {characters['results'].map( (character) =>
          (
          <Character key={character.id} character={character} />
        ) )}
        </div>
        </div>
    </div>
  );


}

export default Listchar;
