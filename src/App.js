import "./App.css";
import AlbumList from "./AlbumList";
import { useEffect, useState, useRef } from "react";
import { getAll, getGenres, getYears } from "./services/albums";

function App() {
  const [albums, setAlbums] = useState(null);
  const [genres, setGenres] = useState(null);
  const [years, setYears] = useState(null);
  const [selectedYear, setSelectedYear] = useState("all");
  const [showWinners, setShowWinners] = useState("false");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [resetVisible, setResetVisible] = useState(false);
  const [albumSelected, setAlbumSelected] = useState(false);

  const sidebar = useRef(null);
  const mobileMenu = useRef(null);
  const resetDesktop = useRef(null);
  const resetMobile = useRef(null);
  const results = useRef(null);

  // Get list of primary genres and years from the database

  useEffect(() => {
    getGenres().then((result) => {
      setGenres(result);
    });

    getYears().then((result) => {
      setYears(result);
    });
  }, []);

  // Get albums from database using search

  useEffect(() => {
    let searchObj = {};

    if (selectedYear !== "all") {
      searchObj.year = selectedYear;
    }

    if (showWinners === "true") {
      searchObj.winner = true;
    }

    if (selectedGenre !== "all") {
      searchObj.genre = selectedGenre;
    }

    getAll(searchObj)
      .then((albums) => {
        setAlbums(albums);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [selectedYear, showWinners, selectedGenre]);

  // Set visibility of reset buttons

  useEffect(() => {
    if (
      selectedYear !== "all" ||
      showWinners !== "false" ||
      selectedGenre !== "all"
    ) {
      setResetVisible(true);
    } else {
      setResetVisible(false);
    }

    if (resetVisible) {
      resetDesktop.current.classList.add("visible");
      resetMobile.current.classList.add("visible");
    }

    if (!resetVisible) {
      resetDesktop.current.classList.remove("visible");
      resetMobile.current.classList.remove("visible");
    }
  }, [resetVisible, selectedYear, selectedGenre, showWinners]);

  // Functions to select and deselect albums

  const select = (event) => {
    const album = event.target.parentElement.parentElement.parentElement;
    album.classList.add("selected");
    document.getElementById("top").scrollIntoView({ behavior: "smooth" });
    setAlbumSelected(true);
    mobileMenu.current.classList.add("fade");
  };

  const deselect = (event) => {
    const album = event.target.parentElement.parentElement;
    album.classList.remove("selected");
    setAlbumSelected(false);
    mobileMenu.current.classList.remove("fade");
  };

  // Function to create title

  const makeTitle = () => {
    let title = "All Albums";

    if (selectedYear !== "all") {
      if (selectedGenre !== "all") {
        if (showWinners !== "false") {
          title = `${selectedGenre} Winner of ${selectedYear}`;
        } else {
          title = `${selectedGenre} Albums of ${selectedYear}`;
        }
      } else {
        if (showWinners !== "false") {
          title = `Winner of ${selectedYear}`;
        } else {
          title = `Albums of ${selectedYear}`;
        }
      }
    } else {
      if (selectedGenre !== "all") {
        if (showWinners !== "false") {
          title = `${selectedGenre} Winners`;
        } else {
          title = `${selectedGenre} Albums`;
        }
      } else {
        if (showWinners !== "false") {
          title = `Winners`;
        }
      }
    }

    return title;
  };

  // Reset button

  const reset = () => {
    setSelectedYear("all");
    setShowWinners("false");
    setSelectedGenre("all");
  };

  // Menu button

  const showMenu = () => {
    if (!albumSelected) {
      sidebar.current.classList.toggle("visible");
      results.current.classList.toggle("shift");
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <img
            className="header__menu"
            src="./img/icons/hamburger.png"
            onClick={showMenu}
            alt="menu"
            ref={mobileMenu}
          ></img>
          <img
            className="header__undo"
            src="./img/icons/undo-white.png"
            alt="undo"
            ref={resetMobile}
            onClick={reset}
          ></img>
          <h1>TAOTY</h1>
        </div>

        {/* Sidebar */}

        <div className="sidebar" ref={sidebar}>
          <form className="sidebar__form year">
            <label htmlFor="year">Year</label> <br></br>
            <select
              name="year"
              id="year"
              className="sidebar__form--select"
              value={selectedYear}
              onChange={(event) => setSelectedYear(event.target.value)}
            >
              {years &&
                years.map((year) => {
                  return (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  );
                })}
              <option value="all"> All Years</option>
            </select>
          </form>

          <form className="sidebar__form winners">
            <label htmlFor="winners">Winners</label> <br></br>
            <select
              name="winners"
              id="winners"
              className="sidebar__form--select"
              value={showWinners}
              onChange={(event) => setShowWinners(event.target.value)}
            >
              <option value="true">Winners only</option>
              <option value="false">All Albums</option>
            </select>
          </form>

          <form className="sidebar__form genre">
            <label htmlFor="genre">Genre</label> <br></br>
            <select
              name="genre"
              id="genre"
              className="sidebar__form--select"
              value={selectedGenre}
              onChange={(event) => setSelectedGenre(event.target.value)}
            >
              {genres &&
                genres.map((genre) => {
                  return (
                    <option value={genre} key={genre}>
                      {genre}
                    </option>
                  );
                })}
              <option value="all">All Genres</option>
            </select>
          </form>
          <button
            className="sidebar__reset"
            onClick={() => reset()}
            ref={resetDesktop}
          >
            {" "}
            <span className="sidebar__reset--text">Reset</span>
            <img
              src="./img/icons/undo.png"
              className="sidebar__reset--undo-icon"
              alt="undo"
            ></img>
          </button>
        </div>

        {/* Results */}

        <div className="results" ref={results} id="top">
          <h2 className="results__title">{makeTitle()}</h2>

          <div className="results__grid">
            {albums && (
              <AlbumList albums={albums} select={select} deselect={deselect} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
