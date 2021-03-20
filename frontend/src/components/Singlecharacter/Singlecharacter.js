import React , { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import { getSinglecharacter } from '../../actions/characters';
import { useSelector } from 'react-redux';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import { likeIt } from '../../actions/characters';

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
    <div>
      {data.name}
      <br/>
      {data.status}
      <br/>
      <img src={data.image} />
      <br/>
      <Likes />
      <br/>
    </div>
  );


}

export default Singlecharacter;
