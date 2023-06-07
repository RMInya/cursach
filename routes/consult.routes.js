const { Router } = require("express");

const problem = require("../models/Consult");
const router = Router();

router.post("/problem", [], async (req, res) => {
  try {
    const { number, problems } = req.body;

    const prob = new problem({ number, problems });

    await prob.save();

    return res.status(201).json({ message: "Confirmed" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "sth went wrong" });
  }
});

module.exports = router;
