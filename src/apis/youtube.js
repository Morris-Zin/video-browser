const KEY = 'AIzaSyAnqxhZcdzSktiReM8YxT5mxQrTzCT0YA8'; 
const axios = require('axios'); 

export default axios.create({ 
     baseURL: "https://www.googleapis.com/youtube/v3", 
     params : { 
          part: 'snippet', 
          maxResults: 5, 
          key: KEY,
          type: 'video',

     }
     
})
