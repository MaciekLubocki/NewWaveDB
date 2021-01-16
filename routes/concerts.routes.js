const express = require("express");
const router = express.Router();
const db = require("./../db");
const { v4: uuidv4 } = require("uuid");
const Concerts = require("./../models/concertsModel");
const Workshops = require("./../models/workshopsModel");

// get all posts
// router.route("/posts").get((req, res) => {
//   res.json(db.posts);
// });

router.route("/concerts").get(async (req, res) => {
  const workshops = await Workshops.find();
  const concerts = await Concerts.find().exec((error, docs) => {
    return docs.map(doc => {
      const data = workshops.filter(workshop => {
        return workshop.concertId == doc._id
      })
      console.log(data)
      //doc.workshop = data
      return doc
  })
  });


  //const concerts = await Concerts.find().populate()

  res.json(concerts);
});

router.route("/concerts/:id").get(async (req, res) => {
  const concert = await Concerts.findById(req.params.id);
  res.json(concert);
});

router.route("/concerts").post(async (req, res) => {
  const { performer, genre, price, day, image } = req.body;

  const concert = await Concerts.create({
    performer,
    genre,
    price,
    day,
    image,
  });

  res.json(concert);
});

router.route("/concerts/:id").delete(async (req, res) => {
  await Concerts.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
});

router.route("/concerts/:id").put(async (req, res) => {
  const { performer, genre, price, day, image } = req.body;

  await Concerts.findByIdAndUpdate({
    $set: {
      performer,
      genre,
      price,
      day,
      image,
    },
  });

  const concerts = await Concerts.find()
  res.json(concerts);
});

module.exports = router;
