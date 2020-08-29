const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  //to get all genres
  router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "genres";`
    pool.query(queryText)
      .then((result) => {
        console.log(result.rows)
        res.send(result.rows);
      })
      .catch((error) => {
        console.log(`Error on genre get query ${error}`);
        res.sendStatus(500);
      });
  });
  res.sendStatus(500)
});

module.exports = router;