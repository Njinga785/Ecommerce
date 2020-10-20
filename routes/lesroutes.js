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
    try {
        if (!req.body.firstName) throw 'NO FIRSTNAME' 
        if (!req.body.lastName) throw 'NO LASTNAME'
        if (!req.body.email) throw 'NO EMAIL'
        if (!req.body.password) throw 'NO PASSWORD'
        if (!req.body.profile) throw 'NO PICTURE'
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                console.log(hash)
                var sql = `INSERT INTO users (firstName, lastName, email,password, profile) VALUES ('${req.body.firstName}','${req.body.lastName}', '${req.body.email}', '${hash}', '${req.body.profile}')`;
                db.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log(result)
                    res.send(result)
                });
            });
        });
    } catch (err) {
        res.status(403).send(err)
    }

})

routes.get('/get-users', (req, res) => {
    try {
        if (!req.body.name) throw 'NO NAME'
        db.query(`SELECT name, id FROM users`, function (err, res) {
            if (err) throw err
            console.log(res)
            res.send(res)
        })
    } catch (err) {
        res.status(403).send(err)
    }

})

routes.post('/sign-in', (req, res) => {
    //const email = req.body.email;
    const password = req.body.password
    const email = req.body.email;
    // console.log(req.body)
    db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) {
         console.log(result);
        if (err) {
            res.send('non')
        } else {
            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, function (error, results) {
                    console.log(results)
                    if (results === true) {
                        let token = jwt.sign({ id: result[0].id, email: result[0].email, name:result[0].name }, config.secret, { expiresIn: 86400 });
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

routes.get('/get-user/:id', (req, res) => {
    try {
        if (!req.body.name) throw 'NO NAME'
        db.query(`SELECT * FROM users WHERE name= ${req.body.name}`, function (err, results) {
            if (err) throw err;
            // console.log(results) 
            res.send(results)
        })
    } catch (err) {
        res.status(403).send(err)
    }


})

//routes products 
routes.get('/get-products', (req, res) => {
    try {
        db.query(`SELECT * FROM products`, function (err, result) {
            if (err) throw err
            // console.log(res)
            res.send(result)
        })
    } catch (err) {
        res.status(403).send(err)
    }

})

routes.use("/add-new-product", (req, res, next) => {
    const authHeader = req.headers.token
    console.log(req.headers)
    const token = authHeader

    if (token) { 
        console.log(token)
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if (err) { 
                console.log(err)
                res.status(403).send('oho');
            } else {
                console.log('test');
                next()
            }
        })

    } else { 
        console.log('bonjour')
        res.status(403).send('oui');
    }

})

routes.post('/add-new-product', (req, res) => {
    try { 
        if(!req.body.productName)throw 'NO PRODUCTNAME' 
        if(!req.body.price)throw 'NO PRICE' 
        if(!req.body.category)throw 'NO CATEGORY'
        if(!req.body.shortDescription)throw 'NO DESCRIPTION'
        if(!req.body.picture)throw 'NO PICTURE' 
        if(!req.body.user_id)throw 'NO USER_ID'
        var sql = `INSERT INTO products (productName, price, category, shortDescription, picture, user_id ) VALUES ('${req.body.productName}', '${req.body.price}', 
    '${req.body.category}', '${req.body.shortDescription}', '${req.body.picture}', '${req.body.user_id}')`;
        db.query(sql, function (err, result) {
            if (err) throw err
            console.log('un product ajouté')
            res.send(result)
        })
    }catch(err){ 
        console.log(err)
        res.status(403).send
    }
    
})

routes.get('/get-product/:id', (req, res) => {
    try {
        // if (!req.body.productName) throw 'NO NAME'
        db.query(`SELECT * FROM products WHERE products.id=${req.params.id}`, function (err, results) {
            if (err) throw err;
            console.log(req.params.id)
            res.send(results)
        })
    } catch (err) {
        res.status(403).send(err)
    }


})

module.exports = routes;