import './style.css'

const Anime = (props) => {

  return (
    <div className='anime-card'>
      <img className='anime-cover'
         src={props.details.src} 
         height='300px' 
         width='225px'
      />

      <div className='box2'>
        <h2 className='anime-title'>{props.details.name} </h2>
        <u><b><span className='anime-writer'>{props.details.writer}&nbsp;</span></b></u>
        <span className='year'>&nbsp;{props.details.mangaPublishYear}</span>
        <p className='anime-description'>{props.details.description}</p>
      </div>
    </div>
  )
}

export default Anime