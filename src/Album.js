const moment = require("moment");

const Album = ({ album, select, deselect }) => {
  return (
    <div className="results__album">
      <div className="results__album--primary-container">
        <div className="results__album--img-container">
          <img
            className="results__album--img"
            src={album.image}
            alt={album.title}
            onClick={select}
          />
        </div>
        <span className="info--close info--close-mobile" onClick={deselect}>
          &times;
        </span>


        <div className="results__album--text">
          <p className="title">{album.title}
          </p>
          <p className="artist">{album.artist}</p>
          
        </div>
      </div>

      <div className="results__album--extra-info">
        <span className="info--close info--close-desktop" onClick={deselect}>
          &times;
        </span>
        {album.winner && (
          <p className="winner winner-mobile"> 
            <img src="./img/trophy.png" className="trophy" alt="Trophy"></img>
            <span className="firework-1"></span>
            <span className="firework-2"></span>
            <span className="firework-3"></span>
            Thompson Album of the Year {album.year}
          <img src="./img/trophy.png" className="trophy" alt="Trophy"></img></p>
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
        {album.winner && (
          <p className="winner winner-desktop"> 
            <img src="./img/trophy.png" className="trophy" alt="Trophy"></img>
            <span className="firework-1"></span>
            <span className="firework-2"></span>
            <span className="firework-3"></span>
            Thompson Album of the Year {album.year}
          <img src="./img/trophy.png" className="trophy" alt="Trophy"></img></p>
        )}
      </div>
    </div>
  );
};

export default Album;
