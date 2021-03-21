import React , { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { getSinglecharacter } from '../../actions/characters';
import { useSelector } from 'react-redux';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import { likeIt } from '../../actions/auth';
import './style.css';

const Singlecharacter = ({ }) => {
  const character = useSelector((state) => state.characters);
  let { id } = useParams();
  const dispatch = useDispatch();


  const [data, setData] = useState({ });


  const findFav = Object.values(JSON.parse(localStorage.getItem('likes'))).findIndex( a => a == id );
  const [likestatus, setLikestatus] = useState({ findFav });


  useEffect(async () => {
    const result = await axios(
      process.env.REACT_APP_SERVER+'/list/character/'+id,
    );

    setData(result.data);
  }, []);






  const Likes = () => {

    return(
      (setLikestatus == -1)?
      <>
      <button onClick={() => dispatch(likeIt(data.id))}  className="btn btn-default">
        Remove</button>
      </>
    :
    <>
    <button onClick={() => dispatch(likeIt(data.id))}  className="btn btn-default">
      ADD TO  FAVORITES</button>
    </>
    );

  }

  return (



    <div className =" my4 ">
     <div className =" container  content-width flex flex-wrap  my4  pt2 rick-border ">
        <div className ="lg-col-3 md-col-3 sm-col-6 xs-col-12 my4">
          <img  className="circle my2" src={data.image} /> <br/>
        </div>
         <div  className="lg-col-9 md-col-9 sm-col-6 xs-col-12 my4 pl4">
            <h2 className="rick-color">  {data.name} </h2>
            <p>{data.status} - {data.gender} </p>
            <p><span className="heavy">species: </span> {data.species}</p>
            <p><span className="heavy">Last known location: </span> Earth (Replacement Dimension)</p>
            <p><span className="heavy">Created: </span> {data.created}</p>
            <Likes />
         </div>

    </div>

    </div>
  );

}

export default Singlecharacter;
