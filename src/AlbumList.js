import Album from "./Album";

const AlbumList = ( { albums, select, deselect }) => {
    return ( 

        albums.map(album => {
            return <Album album={album} key={album.id} select={select} deselect={deselect} />
        })

     );
}
 
export default AlbumList;