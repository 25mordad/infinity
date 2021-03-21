import React , { useState, useEffect }   from 'react';

import Character from './Character/Character';
import goback from "../../images/goback.svg";
import gonext from "../../images/gonext.svg";


const Listchar = () => {

  const [paging, setPaging] = useState(1);

  const [characters, updateCharacters] = useState();

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(process.env.REACT_APP_SERVER+'/list/'+paging);
      const json = await resp.json();
      updateCharacters(Object.values(json.results));

    }
    getData();
  }, [paging]);

  const nxtpg = () => {
      setPaging(paging+1);
  }
  const prvpg = () => {
      if (paging !== 1){
        setPaging(paging-1);
      }
  }



  return (
    (!characters) ?
    <div>
      loading
    </div> :
    <div>
      <div className ="bg-logo center margin-auto container" >
      <div className ="lg-col-12  md-col-12 sn-col-12 xs-col-12 flex flex-wrap mt4 pt4">

      <div className =" lg-col-1 md-col-1 sm-col-1 xs-col-1  p4">
         <img   alt="goback"  onClick={prvpg} className ="icon-w"  src={goback} />
      </div>

        <div className =" lg-col-10 md-col-10 sm-col-10 xs-col-8">
        <h1 className =" text-navy  xs-hide text-72 heavy center margin-auto" >The Rick and Morty <br/>Infinity</h1></div>
        <div className =" lg-col-1 md-col-1 sm-col-1 xs-col-1 p4">
         <img   alt="gonext"  onClick={nxtpg} className ="icon-w"  src={gonext} />
        </div>

      </div>
      </div>
      <div className ="bg-gray  pt4 margin-min">




        <div className ="container content-width  flex flex-wrap ">
        {characters.map( (character) =>
          (
          <Character key={character.id} character={character} />
        ) )}
        </div>
        </div>
    </div>
  );


}

export default Listchar;
