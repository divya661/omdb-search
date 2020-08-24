const express = require('express');
const router = express.Router();
//just like request library it also helps to make rest calls
const axios = require('axios');

const apiKey = '48d64664'

// req - request( input send to this endpoint)
// res - response( sended back to the UI )
// next - middleware part
// anonymous callback function
router.get('/search',(req,res,next)=>{
    // query parameters
    // express gives query params in req.query
const title = req.query.title;


const url = `http://www.omdbapi.com/?s=${title}&apikey=4415260f`;
console.log('trying to get data from'+url);
// Make a request for a user with a given ID
axios.get(url)
  .then( (response)=> {
    // handle success
    console.log(response.data)
    res.send(response.data)
  })
  .catch( (error)=> {
    // handle error
    console.log(error)
    res.send(error)
  })
});

router.get('/result/:imdbId',(req,res,next)=>{
  
  // route parameter
    const imdbId = req.params.imdbId;
    axios.get(url)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err)
    })
});

module.exports = router;