const express = require('express');
const routes = express.Router();
const db = require('../database/database.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(10);
const config = require('./config.js'); 


//routes users
routes.post("/sign-up", (req, res) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            // console.log(hash)
            var sql = `INSERT INTO users (name, email,password, picture) VALUES ('${req.body.name}', '${req.body.email}', '${hash}', '${req.body.picture}')`;
            db.query(sql, hash, function (err, result) {
                if (err) throw err;
                console.log(result)
                res.send(result)
            });
        });
    });
})

routes.get('/get-users', (req, res) => {
    db.query(`SELECT name, id FROM users`, function (err, res) {
        if (err) throw err
        console.log(res)
        res.send(res)
    })
})

routes.post('/sign-in', (req, res) => {
    //const email = req.body.email;
    const name = req.body.name
    const password = req.body.password;
    // console.log(req.body)
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) {
        // console.log(result);
        if (err) {
            res.send('non')
        } else {
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, function (error, results) {
                    console.log(results)
                    if (results === true) {
                        let token = jwt.sign({ id: result[0].id, email: result[0].email }, config.secret, { expiresIn: 86400 });
                        console.log(token)
                        res.send({ token: token })
                        console.log('your recognize')
                    } else {
                        console.log('who are you')
                        // console.log(results);
                    }

                })
            } else {
                console.log('faux mail')
            }

        }

    })
})

routes.get('/get-users/:id', (req, res) => {
    db.query(`SELECT users.id, users.name, users.email, users.picture, users.password  FROM users INNER JOIN products ON users.id = products.userid WHERE products.userid = ${req.params.id}`, function (err, results) {
        if (err) throw err;
        // console.log(results) 
        res.send(results)
    })

})

//routes products 
routes.get('/get-products', (req, res) => {
    db.query(`SELECT * FROM products`, function (err, result) {
        if (err) throw err
        console.log(res)
        res.send(result)
    })
})

routes.use("/add-new-product", (req, res, next) => {
    const authHeader = req.headers.token
    console.log(req.headers.token)
    const token = authHeader
    
    if (token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) {
                res.status(403).send('oho');
            } else {
                console.log('test');
                next()
            }
        })

    } else {
        res.status(403).send('oui');
    }

})

routes.post('/add-new-product', (req, res) => {
    var sql = `INSERT INTO products (name, price, category, description, picture, userid ) VALUES ('${req.body.name}', '${req.body.price}', 
    '${req.body.category}', '${req.body.description}', '${req.body.picture}', '${req.body.userid}')`;
    db.query(sql, function (err, result) {
        if (err) throw err
        console.log('un product ajouté')
        res.send(result)
    })
}) 

routes.get('/get-product/:id', (req, res) => {
    db.query(`SELECT products.id, products.name, products.price, products.category, 
     products.description, products.picture, products.userid  FROM products INNER JOIN users ON products.userid = users.id WHERE products.userid = ${req.params.id}`, function (err, results) {
        if (err) throw err;
         console.log(results) 
        res.send(results)
    })

})

module.exports = routes;