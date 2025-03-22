import React from "react";
import * as api from "../store/artists.store";
import Loader from "./Loader";

export default function Artists() {
  const [artistList, setArtistsList] = React.useState([]);
  const [originalList, setOriginalList] = React.useState([]);
  const [menus, setMenus] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [key, setKey] = React.useState(0);


  function getPromises(){
    const p1 = api.getArtist();
    const p2 = api.getMenuLabels();
    Promise.all([p1,p2])
    .then(res=>{
      setOriginalList(res[0]);
      setArtistsList(res[0]);
      setMenus(res[1]);
      setLoading(false);
    })
    .catch((e)=>{
      setError(true);
    })
  }

  React.useEffect(() => {
    getPromises();
  }, []);

  function handleFilter(e){
    const {id} = e.target;
    
    if(id){
      setArtistsList(prev=>{
        if(id==="All") return originalList;
        return originalList.filter(artist => artist.genre === id);
      })
    }
  }

  function handleReload(){
    console.log("reload");
    
    setKey(prev=>prev+1);
  }


  if(error){
    return <div>there is some error</div>
  }

  return (
    <>
      <button onClick={handleReload}>Reload</button>

      {loading ? <Loader/> : (
        <div key={key}>
          {console.log("first")
          }
          <h1>MTV base head line ar 1029</h1>
          <div>
          {menus.map(menu=> {
            return (
              <button className="menu-btn" key={menu.id} onClick={handleFilter} id={menu.genre}>{menu.genre}</button>
            )
          })}
          </div>
          {artistList.length ? <div className="list-box">
          { artistList.map((artist) => {
            return (
              <div id="card-body" key={artist.id}>
                <div className="img-banner">
                <img src={artist.image} className="card-img"/>
                </div>
                <div className="fader"/>
                <div className="card">
                  <h1>{artist.name}</h1>
                  <p>genre: {artist.genre}</p>
                  <p>album released: {artist.albumReleased}</p>
                  
                </div>
              </div>
            );
          })}
          </div>: <div>No Artists</div>}
        </div>
      )}
    </>
  );
}
