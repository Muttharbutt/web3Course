let album = [];

const makeAlbum = (artistName, albumTitle, noOfTracks = 1) => {
  album.push({
    asrtistName: artistName,
    albumTitle: albumTitle,
    noOfTracks: noOfTracks,
  });
};
makeAlbum("Taylor Swift", "Babe");
makeAlbum("Dua Lipa", "Sweetest Pie");
makeAlbum("Young Stunners", "Karachi", 200);
console.log(album);
