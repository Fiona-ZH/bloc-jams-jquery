{
  $('#album-title').text(album.title);
  $('#album-cover-art').attr('src', album.albumArtUrl);
  $('h2.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
