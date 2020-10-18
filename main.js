$.getJSON('https://api.tenor.com/v1/search?cats', function(json) {
  console.log(json);
  var medias = json.results; 
  for( var i = 0; i< medias.length; i = i + 1 ) {
    var media = medias[ i ];
    var videoContainer = $( "<div class='video-container'></div>" );
    var video = $( "<video>" );
    video.attr( "src", media.media.url );
    videoContainer.append( video );
    body.append( videoContainer );
  }
});
