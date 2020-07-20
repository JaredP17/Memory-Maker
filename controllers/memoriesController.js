const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/id/:id", (req, res) => {
  console.log(req.cookies);
  db.Event.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(memoryData => {
      const { id, title, date, description, location, rating } = memoryData.dataValues;
      const memoryObject = {
        id: id,
        title: title,
        date: date,
        description: description,
        location: location,
        rating: rating
      };
      memoryArray = [];
      memoryArray.push(memoryObject);
      const selectedMemory = {
        memory: memoryArray
      };
      res.render("memory", selectedMemory);
    });
});

router.get("/:username", (req, res) => {
  db.Event.findAll({
    where: {
      UserUsername: req.params.username
    }
  })
    .then(memoryData => {
      const memoryArray = memoryData.map(memory => {
        const { id, title, date, description, location, rating } = memory.dataValues;
        const memoryObject = {
          id: id,
          title: title,
          date: date,
          description: description,
          location: location,
          rating: rating
        };
        return memoryObject;
      })
      const memories = {
        memory: memoryArray
      };
      res.render("memories", memories);
    });
});

module.exports = router;