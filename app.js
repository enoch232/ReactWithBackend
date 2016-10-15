const express = require('express')
const path = require('path')
const port = process.env.PORT || 8080
const app = express()
app.set("view engine","ejs")

app.use(express.static(path.join(__dirname, 'public')))

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (req, res){
  res.render("index")
})

app.listen(port)
console.log("server started on port " + port)
