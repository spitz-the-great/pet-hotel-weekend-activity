const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', function (req, res){
    console.log('addPet post /dashboard', req.body);
    const petFromDom = req.body;
    const query = `INSERT INTO "pets" ("owner_name", "pet_name", "breed", "color", "checked_in", "attitude", "swag_level", "image_url")
                VALUES($1, $2, $3, $4, $5, $6, $7, $8);`
    // end post sql
    pool.query(query, 
        [petFromDom.ownerName,
         petFromDom.petName,
         petFromDom.petBreed, 
         petFromDom.petColor, 
         petFromDom.checked_in,
         petFromDom.petAttitude,
         petFromDom.petSwag,
         petFromDom.image_url
        ]).then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error adding new pet - POST /dashboard: ', error);
            res.sendStatus(500);
        });
}) // end post


router.get('/', (req, res) => {
    console.log('/dashboard GET history');
    const getQuery = `SELECT * FROM "pets";`
    pool.query(getQuery).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting the babies at /dashboard pls halp', error);
        res.sendStatus(500);
    });
})

module.exports= router;