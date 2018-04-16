class Helper {
  playpauseAndUpdate(song){
    console.log(player.getDuration() + " 1 ");
    player.playPause(song);
    console.log(player.getDuration() + " 2 ");
    const duration = player.currentlyPlaying.duration;
    $('#time-control .total-time').text( player.prettyTime(duration) );
  }
}

const helper = new Helper();
