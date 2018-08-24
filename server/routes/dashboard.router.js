const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', function (req, res) {
    console.log('addPet post /dashboard', req.body);
    const petFromDom = req.body;
    const query = `INSERT INTO "pets" ("owner_id", "pet_name", "breed", "color", "checked_in", "attitude", "swag_level", "image_url")
                VALUES($1, $2, $3, $4, $5, $6, $7, $8);`
    // end post sql
    pool.query(query,
        [petFromDom.ownerID,
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
    const getQuery = `SELECT "pets"."id", "pets"."pet_name", "pets"."breed", "pets"."color", "pets"."checked_in", "pets"."attitude", "pets"."swag_level", "pets"."image_url", "pets"."owner_id", "owners"."owners_name"
    FROM "pets"
    JOIN "owners" ON "pets"."owner_id" = "owners"."id"
    ORDER BY "pets"."id" ASC;`
    pool.query(getQuery).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('error getting the babies at /dashboard pls halp', error);
        res.sendStatus(500);
    });
}) // end GET pets

router.delete('/:id', (req, res) => {
    console.log('delete history line in /dashboard');
    const historyId = req.params.id;
    pool.query(`DELETE FROM "pets" WHERE "id"=$1;`, [historyId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('error deleting hist line: ', error);
            res.sendStatus(500);
        });
    }); //end delete history

router.put('/:id', function( req, res ){
    const id = req.params.id;
    const status = req.body;
    console.log('updating status: ', status);
    const query =  `UPDATE "pets" SET "checked_in" = $1 WHERE id=$2;`
    pool.query(query, [status.status, id])
    .then((result) => {
        console.log('update status result: ', result);
        res.sendStatus(200);
        }) .catch((err) => {
            console.log('error updating in/out status :', err);
            res.sendStatus(500);
        });
});



    module.exports = router;