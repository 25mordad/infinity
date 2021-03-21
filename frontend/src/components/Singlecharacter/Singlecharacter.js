import React , { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import {  useParams } from "react-router-dom";
import axios from 'axios';
import { likeIt } from '../../actions/auth';
import './style.css';

const Singlecharacter = () => {
  let { id } = useParams();
  const dispatch = useDispatch();


  const [data, setData] = useState({ });
  let initliketxt = "ADD TO  FAVORITES";
  let findFav = -1;

  if (localStorage.getItem('profile')) {
    findFav = Object.values(JSON.parse(localStorage.getItem('likes'))).findIndex( a => a === id );
    if (findFav !== -1){
      initliketxt = "Remove";
    }
  }
  const [likestatus, setLikestatus] = useState(findFav);
  const [liketxt, setLiketxt] = useState(initliketxt);

  useEffect(async () => {
    const result = await axios(
      process.env.REACT_APP_SERVER+'/list/character/'+id,
    );

    setData(result.data);
  }, []);



  function handleClicklike() {
    if (localStorage.getItem('profile')) {
     dispatch(likeIt(data.id))
     if (likestatus === -1) {
       setLikestatus(parseInt(id));
       setLiketxt("Remove");
     }else{
       setLikestatus(-1);
       setLiketxt("ADD TO  FAVORITES");
     }
   }else{

     window.location.href = '/auth';
   }

  }



  const Likes = () => {

    return(
      <>
      <button onClick={handleClicklike}  className="btn btn-default">
        {liketxt}</button>
      </>
    );

  }

  return (
    <div className =" my4  ">
     <div className ="  border-navy  container  content-width flex flex-wrap   ">
        <div className ="lg-col-3 md-col-3 sm-col-6 xs-col-11 my4 p4">
          <img alt="charpic" className="circle my2" src={data.image} /> 
        </div>
         <div  className="lg-col-9 md-col-9 sm-col-6 xs-col-12 p2  my1 pl4">
            <h2 className="rick-color text-title">  {data.name} </h2>
            <p>{data.status} - {data.gender} </p>
            <p><span className="heavy">species: </span> {data.species}</p>
            <p><span className="heavy">Last known URL: </span> {data.url}</p>
            <p><span className="heavy">Created: </span> {data.created}</p>
            <Likes />
         </div>
      
    </div>

    </div>
  );

}

export default Singlecharacter;
