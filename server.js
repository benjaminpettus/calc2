const express = require('express')
let app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.render(index)
})

let server = app.listen(3000, function () {
  console.log('Listening to port', server.address().port)
})
