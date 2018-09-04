var playlist = {Rush: "Tom Sawyer"}

function updatePlaylist(uno, dos, tres) {
  uno[dos] = tres;
  return playlist
}

function removeFromPlaylist(uno, dos) {
  delete uno.dos
  return playlist
}