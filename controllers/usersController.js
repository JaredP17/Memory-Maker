const express = require("express");
const router = express.Router();
const db = require("../models");

router.get('/', (req, res) => {
  db.User.findAll().then(data => {
    res.json(data);
  })
})

router.post('/login', (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password, 
    }
  }).then(data => {
    if (data === null) {
      throw error;
    }
    const token = {
      sessionToken: data.dataValues.username
    }
    res.send(token);
  }).catch(error => {
    res.status(500).send('Incorrect login')
  })
})

router.get('/:username', (req, res) => {
  db.User.findAll({
    where: {
      username: req.params.username
    }
  }).then(data => {
    
    res.json(data);
  })
})

router.post("/", (req, res) => {
  db.User.create(req.body)
    .then(result => {
      res.json({
        error: false,
        data: result,
        message: "Successfully created new user",
      });
    })
    .catch((err) => {
      console.log("error occured", err);
      res.status(500).json({
        error: err.errors,
        data: null,
        message: "Unable to create new user.",
      });
    });
});

// /api/users/:id
// router.put("/:id", (req, res) => {
//   res.json({
//     message: "Put route",
//   });
// });

// // /api/users/:id
// router.delete("/:id", (req, res) => {
//   res.json({
//     message: "Delete route",
//   });
// });

module.exports = router;
