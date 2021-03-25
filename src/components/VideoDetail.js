import React from 'react'; 


const VideoDetail = ({video}) => { 

    if(!video) {
         return <div>Loading... </div>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
     
      return (
          <div>
               <div class="ui embed" data-source="youtube" data-id="O6Xo21L0ybE" data-placeholder="/images/image-16by9.png">
          <iframe title="video player" className="ui" src={videoSrc}> </iframe>
                </div>

        <div className="ui segment"> 

                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
          </div>
       </div>
      )
}


export default VideoDetail