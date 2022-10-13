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

        <div className="results__album--text">
          <p className="title">{album.title}</p>
          <p className="artist">{album.artist}</p>
        </div>
      </div>

      <div className="results__album--extra-info">
        <span className="info--close" onClick={deselect}>
          &times;
        </span>
        <table>
          <tbody>
            <tr>
              <td>Genre:</td>
              <td>{album.genre}</td>
            </tr>
            <tr>
              <td>Nationality:</td>
              <td>{album.nationality}</td>
            </tr>
            <tr>
              <td>Description:</td>
            </tr>
          </tbody>
        </table>

        <p className="description">{album.description}</p>
      </div>
    </div>
  );
};

export default Album;
