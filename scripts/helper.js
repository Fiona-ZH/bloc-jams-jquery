class Helper {
  playpauseAndUpdate(song = player.currentlyPlaying){
    const duration = player.getDuration();
    $('#time-control .total-time').text( player.prettyTime(duration) );
    player.playPause(song);
  }
}

const helper = new Helper();
