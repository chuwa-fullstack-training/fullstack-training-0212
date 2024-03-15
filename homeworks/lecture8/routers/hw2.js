express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/hw2", async (req, res) => {
  try {
    const { query1, query2 } = req.query;
    console.log(query1, query2);
    if (!query1 || !query2) {
      return res
        .status(400)
        .json({ error: "Both query1 and query2 are required parameters." });
    }

    const data1 = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=query1&tags=story"
    );
    // console.log(data1)

    const data2 = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=query2&tags=story"
    );
    const response = {
      [query1]: {
        createed_at: data1.data.hits[0].created_at,
        title: data1.data.hits[0].title,
      },
      [query2]: {
        createed_at: data2.data.hits[0].created_at,
        title: data2.data.hits[0].title,
      },
    };
    const jsonString = JSON.stringify(response, null, 2);

    res.setHeader("Content-Type", "application/json");
    res.end(jsonString);
  } catch (error) {
    console.error(error);
  }
});

router.get("*", (req, res) => {
  res.status(404).end("This is the 404 page");
});

module.exports = router;
