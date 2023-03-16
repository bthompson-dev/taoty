import Album from "./Album";

const AlbumList = ({ albums, select, deselect, getMap }) => {
    return ( 

        albums.map(album => {
            return <Album album={album} key={album._id} select={select} deselect={deselect} getMap={getMap} />
        })

     );
}
 
export default AlbumList;