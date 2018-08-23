const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', function (req, res){
    console.log('addPet post /dashboard', req.body);
    const petFromDom = req.body;
    const query = `INSERT INTO "pets" ("owner_name", "pet_name", "breed", "color", "attitude", "swag_level")
                VALUES($1, $2, $3, $4, $5, $6);`
    pool.query(query, 
        [petFromDom.ownerName,
         petFromDom.petName,
         petFromDom.petBreed, 
         petFromDom.petColor, 
         petFromDom.petAttitude,
         petFromDom.petSwag
        ]).then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error adding new pet - POST /dashboard: ', error);
            res.sendStatus(500);
        });
})


module.exports= router;