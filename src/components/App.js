import React, { useEffect, useState } from 'react'; 
import SearchBar from './SearchBar'
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideoSearch from '../hooks/useVideoSearch';

const App = () =>  {
    const [video, search] = useVideoSearch('Your name !');   
    const [selectedVideo, setSelectedVideo] = useState(null);

    console.log(video)
    useEffect(() => { 
            setSelectedVideo(video[0]);
    },[video])


         return (
             <div className="ui container">
                <SearchBar onSubmit={search} />   
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={selectedVideo}/>
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={setSelectedVideo} videos={video}/>
                         </div>
                    </div>
                </div>
             </div>
         )

}


export default App; 