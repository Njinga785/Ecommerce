const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
<<<<<<< HEAD

const cors = require('cors')
app.use(cors())
=======
const routes = require('./routes/lesroutes')


const cors = require('cors')
app.use(cors()) 
app.use(routes)
>>>>>>> 6c7a8abd8dc44586f28b86cbd8d0d2bf37eb6a6f


app.listen(3000, () => {
    console.log('server port on 3000');
})

