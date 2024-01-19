import "./App.css";
import AlbumList from "./AlbumList";
import { useEffect, useState, useRef } from "react";
import { getAll, getGenres, getYears } from "./services/albums";

function App() {
  // STATE
  const [albums, setAlbums] = useState(null);
  const [genres, setGenres] = useState(null);
  const [years, setYears] = useState(null);
  const [selectedYear, setSelectedYear] = useState("all");
  const [showWinners, setShowWinners] = useState("false");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [resetVisible, setResetVisible] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [spotifyAlbum, setSpotifyAlbum] = useState(null);

  // REFS
  const sidebar = useRef(null);
  const mobileIcons = useRef(null);
  const resetDesktop = useRef(null);
  const resetMobile = useRef(null);
  const results = useRef(null);

  // Map of refs to individual albums
  const albumsMap = useRef(null);

  // useEFFECTS

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

  // Create Spotify player

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://open.spotify.com/embed/iframe-api/v1");
    script.setAttribute("async", "");
    document.head.appendChild(script);

    window.onSpotifyIframeApiReady = (IFrameAPI) => {

      const element = document.getElementById("embed-iframe");

      const options = {
        height: "200px",
        width: "400px",
      };

      const callback = (EmbedController) => {

        setTimeout(() => {
          const buttons = document.querySelectorAll(".spotify-button");

          buttons.forEach((button) => {
            button.addEventListener("click", () => {
              EmbedController.loadUri(button.dataset.spotifyId);
            });
          });
        }, 500);
      };

      IFrameAPI.createController(element, options, callback);
    };
  }, []);


  // Functions to select and deselect albums

  const select = (id) => {
    if (selectedAlbum) {
      selectedAlbum.classList.remove("selected");
    }

    const map = getMap();
    const album = map.get(id);
    album.classList.add("selected");
    album.scrollIntoView({ behavior: "smooth", block: "start" });
    setSelectedAlbum(album);
    mobileIcons.current.classList.add("fade");
  };

  const deselect = (id) => {
    const map = getMap();
    const album = map.get(id);
    album.classList.remove("selected");
    album.scrollIntoView();
    setSelectedAlbum(null);
    mobileIcons.current.classList.remove("fade");
  };

  // Creating a map within the albumsMap ref if one doesn't exist
  const getMap = () => {
    if (!albumsMap.current) {
      albumsMap.current = new Map();
    }
    return albumsMap.current;
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
    if (!selectedAlbum) {
      setSelectedYear("all");
      setShowWinners("false");
      setSelectedGenre("all");
    }
  };

  // Menu button

  const showMenu = () => {
    if (!selectedAlbum) {
      sidebar.current.classList.toggle("visible");
      results.current.classList.toggle("shift");
    }
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header__mobile-icons" ref={mobileIcons}>
            <img
              className="header__menu"
              src="./img/icons/hamburger.png"
              onClick={showMenu}
              alt="menu"
            ></img>
            <img
              className="header__undo"
              src="./img/icons/undo-white.png"
              alt="undo"
              ref={resetMobile}
              onClick={reset}
            ></img>
          </div>
          <h1>TAOTY</h1>
        </div>

        {/* Sidebar */}

        <div className="sidebar" ref={sidebar}>
          <form className="sidebar__form year">
            <label htmlFor="year">Year</label>
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
            <label htmlFor="winners">Winners</label>
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
            <label htmlFor="genre">Genre</label>
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

        <div className="results" ref={results}>
          <h2 className="results__title">{makeTitle()}</h2>

          <div className="results__grid">
            {albums && (
              <AlbumList
                albums={albums}
                select={select}
                deselect={deselect}
                getMap={getMap}
              />
            )}
          </div>
        </div>
      </div>
      <div className="spotify-player">
        <div id="embed-iframe"></div>
      </div>
    </>
  );
}

export default App;
