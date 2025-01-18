const express = require("express");
const router = express.Router();

const menuItem = require("./../models/menu.js");

router.get("/", async (req, res) => {
  try {
    const data = await menuItem.find();

    console.log("data fetch successfull");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;

    const newitem = new menuItem(data);
    const resposne = await newitem.save();
    console.log("data is inserted");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;
    if (taste == "sweet" || taste == "sour" || taste == "spicy") {
      const response = await menuItem.find({ taste: taste });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Internal Taste Type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
