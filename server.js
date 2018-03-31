const express = require('express')
const app = express()
const axios = require('axios');
const path = require('path');
const cors = require('cors');

app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/api/getquote', (req, res) => {
  axios.get('http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(response => {
     res.send(response.data)
  })
})

app.listen(3001, () => console.log('Example app listening on port 3000!'))
