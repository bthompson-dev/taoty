import Album from "./Album";

const AlbumList = ({ albums, selectRef, deselectRef, getMap }) => {
    return ( 

        albums.map(album => {
            return <Album album={album} key={album._id} selectRef={selectRef} deselectRef={deselectRef} getMap={getMap} />
        })

     );
}
 
export default AlbumList;