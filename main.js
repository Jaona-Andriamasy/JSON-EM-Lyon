$.getJSON('https://api.tenor.com/v1/search?cats', function(json) {
  console.log(json);
  var medias = json.results; 
  
  // store the "body" of our document inside a jQuery object
  var body = $( "body" );
  
  // loop through each user in our "media" array
  for( var i = 0; i< medias.length; i = i + 1 ) {
    // store the current user in a variable
    var media = medias[ i ];
    
    // we create a container for the user image and its data
    var videoContainer = $( "<div class='video-container'></div>" );
    
    // we create a jQuery object with an "video" element
    var video = $( "<video>" );
    // set its "src" attribute with a jquery method
    video.attr( "src", media.media.url );
    // and append this element to our container
    videoContainer.append( video );
    
    // finally we append the container to the "body" of our document
    body.append( videoContainer );
  }
});
