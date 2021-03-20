import React , { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { getSinglecharacter } from '../../actions/characters';
import { useSelector } from 'react-redux';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import { likeIt } from '../../actions/characters';
import './style.css';

const Singlecharacter = ({ }) => {
  const character = useSelector((state) => state.characters);
  let { id } = useParams();
  const dispatch = useDispatch();


  const [data, setData] = useState({ });

  useEffect(async () => {
    const result = await axios(
      process.env.REACT_APP_SERVER+'/list/character/'+id,
    );

    setData(result.data);
  }, []);



  const Likes = () => {

    return(
      <div>
        <button onClick={() => dispatch(likeIt(data.id))}>
          Like
        </button>
      </div>
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
            <button  className="btn btn-default" onclick="">
              ADD TO  FAVORITES</button>
         </div>

    </div>
    <br/>
    <Likes />
    <br/>
    </div>
  );

}

export default Singlecharacter;
