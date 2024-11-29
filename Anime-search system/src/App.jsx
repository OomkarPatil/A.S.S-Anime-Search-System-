import AnimeList from "./components/AnimeList"
import { animeData } from "./utils/List"
import { useState } from "react"
import "./components/style.css"


function App() {
  const [searchname, setSearchname] = useState("");
  const [filteredAniList, setFilteredAniList] = useState(animeData)

  const handlesearch = ()=>{
      const filteredlist = animeData.filter(animeData => 
          animeData.name.toLowerCase().includes(searchname.toLowerCase())
      );

      setFilteredAniList(filteredlist);
  }

  

  return (
  <>
    <div className='search'>
        <h2 className='search-title'>Search your show</h2>
        <div className='herosection'>
          <input type="text" className='search-input' onChange={(e)=>setSearchname(e.target.value)}/>
          <button className='search-button' onClick={handlesearch}>Go Hunt !</button>
        </div>
    </div>
    <AnimeList ani={filteredAniList}/>
  </>  
)

}

export default App
