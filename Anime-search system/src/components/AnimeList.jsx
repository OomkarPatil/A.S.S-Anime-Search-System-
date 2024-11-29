import React from 'react'
import Anime from './Anime'
import { animeData } from '../utils/List';
import './style.css'


const AnimeList = (props) => {
  return ( 
      <div className='anime-list'>
        {
            props.ani.map((ani)=>(
            <Anime key={ani.id} details={ani}></Anime>
        ))} 
      </div>
    );
}

export default AnimeList