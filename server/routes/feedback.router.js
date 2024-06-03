const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', async (req, res) => {
  const sqlText = `INSERT INTO "feedback" ("feeling","understanding","support","comments") VALUES ($1, $2, $3, $4)`;
  try {
    pool.query(sqlText, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comments,
    ]);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
  const sqlText = `Select * From feedback ORDER BY "date" DESC, "id" DESC;`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.delete('/deletefeedback/:id', async (req, res) => {
  const sqlText = 'DELETE FROM feedback WHERE "id"=$1;';
  try {
    await pool.query(sqlText, [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

router.put('/flagfeedback/:id/:state', async (req, res) => {
  const sqlText = 'UPDATE feedback SET "flagged"=$2 WHERE "id"=$1 ';
  try {
    await pool.query(sqlText, [req.params.id, req.params.state]);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
