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
    <div >

      <div className ="  margin-auto content-width my2">
       <div className ="  flex">
         <div className ="icon-width1  lg-col-1 md-col-1 sm-col-1 xs-col-1 p4">
         <img  onClick={prvpg} className =" responsive"  src={goback} />
        </div>
        <div className ="icon-width1  lg-col-11 md-col-10 sm-col-10 xs-col-10"> </div>
        <div className ="icon-width2  lg-col-1 md-col-1 sm-col-1 xs-col-1   p4 right-text  ">
        <img onClick={nxtpg} className ="responsive "  src={gonext} />
        </div>
       </div>
      </div>



        <div className ="container content-width flex flex-wrap my2 ">
        {characters.map( (character) =>
          (
          <Character key={character.id} character={character} />
        ) )}
        </div>
    </div>
  );


}

export default Listchar;
