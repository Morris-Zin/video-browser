import React, { useEffect, useState } from 'react'
import youtube from '../apis/youtube';  

const useVideoearch = (searchTo) => {
    const [video, setVideo] = useState([]);   

    useEffect(() => { 
        
        search(searchTo); 

    },[]);

    const search = async (searchTo) => {
        const response = await  youtube.get('/search', { 
        params: { 
        q: searchTo,
        }
            });
  
              setVideo(response.data.items); 
      };  

      return [video, search];
}

export default useVideoearch; 
