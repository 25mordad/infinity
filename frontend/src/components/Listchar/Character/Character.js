import React  from 'react';
import like from "../../../images/like.svg";
import likefull from "../../../images/likefull.svg";
import './style.css';

const Character = ({ character }) => {
const charLink = "/character/"+ character.id;
let srcLike ="";
if (localStorage.getItem('profile')) {
  const allLikes = Object.values(JSON.parse(localStorage.getItem('likes')));
  const isLiked = allLikes.findIndex(a => parseInt(a) === parseInt(character.id));
  if ( isLiked === -1) {
    srcLike = like;
  }else{
    srcLike = likefull;
  }
}else{
  srcLike = like;
}

  return (
    <div className ="lg-col-3 md-col-4 sm-col-6 xs-col-12">
      <div className ="box-shadow rounded  bg-navy m3">

      <a href={charLink}><img alt="character" className ="rounded-top responsive" src={character.image} /></a>
      <br/>
      <div className ="p2 px3">
      <a  className ="heavy text-beige " href={charLink}> {character.name} </a>

      <div className ="relative">
        <div>
        <p>{character.status} - {character.gender} </p>
        </div>
        <div className ="absolute-bottom  lg-col-2 md-col-2 sm-col-2 xs-col-2 pt2">
          <br/>
         <a href={charLink}><img alt="like" className ="pointer icon-w" src={srcLike} /></a>
       </div>


      </div>

      </div>

    </div>
  </div>
  );
}

export default Character;
