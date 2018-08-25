const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/', function (req, res) {
    console.log('addOwner post /owners', req.body);
    const ownerFromDom = req.body;
    const query = `INSERT INTO "owners" ("owners_name")
        VALUES ($1);`;
    pool.query(query, [ownerFromDom.ownerName])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('error adding new owner - POST /owners: ', error);
            res.sendStatus(500);
        });
})




module.exports = router;