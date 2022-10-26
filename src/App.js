import "./App.css";
import AlbumList from "./AlbumList";
import { useEffect, useState } from "react";
import getAll from './services/albums';

function App() {

  const [albums, setAlbums] = useState(null);
  const [selectedYear, setSelectedYear] = useState('all');


  useEffect(() => {

    if (selectedYear === 'all') {
      getAll()
        .then((albums) => {
          setAlbums(albums);
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      getAll({year: selectedYear})
        .then((albums) => {
          setAlbums(albums);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
        
  }, [selectedYear])

const select = (event) => {
  const album = event.target.parentElement.parentElement.parentElement;
  album.classList.add("selected");
  document.getElementById("top").scrollIntoView({ behavior: "smooth" });
};

const deselect = (event) => {
  const album = event.target.parentElement.parentElement;
  album.classList.remove("selected");
};



  return (
    <>
      
        <div className="container">
          <div className="header">
            <h1>TAOTY</h1>
          </div>

          <div className="sidebar">
            <form className="sidebar__form">
              <label htmlFor="year">Year</label> <br></br>
              <select name="year" id="year" className="sidebar__form--select" value={selectedYear} onChange={(event) => setSelectedYear(event.target.value)}>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="all"> All Years</option>
              </select>
            </form>
          </div>

          <div className="results" id="top">
            <h2 className="results__title">
              {selectedYear === 'all' ? 'All Albums' : 'Albums of ' + selectedYear}
              </h2>

            <div className="results__grid">
              {albums && <AlbumList albums={albums} select={select} deselect={deselect}/>}
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
