const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes/lesroutes')


const cors = require('cors')
app.use(cors()) 
app.use(routes)


app.listen(3000, () => {
    console.log('server port on 3000');
})

