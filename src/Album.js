const moment = require("moment");

const Album = ({ album, select, deselect, getMap }) => {
  return (
    <div
      className="results__album"
      ref={(node) => {
        const map = getMap();
        if (node) {
          map.set(album._id, node);
        } else {
          map.delete(album._id);
        }
      }}
    >
      <div className="results__album--primary-container">
        <div className="results__album--img-container">
          <img
            className="results__album--img"
            srcSet={`${album.images[0]} 250w, ${album.images[1]} 500w, ${album.images[2]} 1000w`}
            sizes="(min-width: 551px) 28vw,
            ((min-width: 365px) and (max-width: 550px) 60vw),
            (max-width: 364px) 70vw"
            alt={album.title}
            loading="lazy"
            onClick={() => select(album._id)}
          />
        </div>
        <span
          className="info--close info--close-mobile"
          onClick={() => deselect(album._id)}
        >
          &times;
        </span>

        <div className="results__album--text">
          <p className="title">{album.title}</p>
          <p className="artist">{album.artist}</p>
        </div>
      </div>

      <div className="results__album--extra-info">
        <span
          className="info--close info--close-desktop"
          onClick={() => deselect(album._id)}
        >
          &times;
        </span>
        {album.winner && (
          <p className="winner winner-mobile">
            <img
              src="./img/icons/trophy.png"
              className="trophy"
              alt="Trophy"
            ></img>
            <span className="firework-1"></span>
            <span className="firework-2"></span>
            <span className="firework-3"></span>
            Thompson Album of the Year {album.year}
            <img
              src="./img/icons/trophy.png"
              className="trophy"
              alt="Trophy"
            ></img>
          </p>
        )}
        <table>
          <tbody>
            <tr>
              <td className="table--title">Release Date:</td>
              <td>{moment(album.release_date).format("Do MMMM YYYY")}</td>
            </tr>
            <tr>
              <td className="table--title">Genre:</td>
              <td>{album.genre}</td>
            </tr>
            <tr>
              <td className="table--title">Nationality:</td>
              <td>{album.nationality}</td>
            </tr>

            {album.description && (
              <tr>
                <td className="table--title">Description:</td>
              </tr>
            )}
          </tbody>
        </table>

        <p className="description">{album.description}</p>

        {album.spotify_uri && (
          <>
            <div className="spotify-button" data-spotify-id={album.spotify_uri}>
              <p> Play with Spotify </p>
              <img
                src="./img/icons/spotify.png"
                alt="Spotify Logo"
                title="Play with Spotify"
              ></img>
            </div>

            <a href={album.spotify_uri} className="spotify-link">
                <p> Open in Spotify </p>
                <img
                  src="./img/icons/spotify.png"
                  alt="Spotify Logo"
                  title="Play with Spotify"
                ></img>
            </a>
          </>
        )}

        {album.winner && (
          <p className="winner winner-desktop">
            <img
              src="./img/icons/trophy.png"
              className="trophy"
              alt="Trophy"
            ></img>
            <span className="firework-1"></span>
            <span className="firework-2"></span>
            <span className="firework-3"></span>
            Thompson Album of the Year {album.year}
            <img
              src="./img/icons/trophy.png"
              className="trophy"
              alt="Trophy"
            ></img>
          </p>
        )}
      </div>
    </div>
  );
};

export default Album;
