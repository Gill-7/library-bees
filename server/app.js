const path = require("path");
const express = require("express");
// const hbs = require("hbs");
const bookStore = require("./utils/bookStore");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/book", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "Must provide the name of the book!",
    });
  }
  bookStore(
    req.query.search,
    req.query.startIdx,
    req.query.limit,
    (err, body) => {
      // const startIndex = (page - 1) * limit;
      // const endIndex = page * limit;

      // const results = {};

      // if (endIndex < body.length) {
      //   results.next = {
      //     page: page + 1,
      //     limit: limit,
      //   };
      // }
      // if (startIndex > 0) {
      //   results.prev = {
      //     page: page - 1,
      //     limit: limit,
      //   };
      // }

      // results.results = body.slice(startIndex, endIndex);
      if (err) {
        return res.send({ err });
      } else {
        res.send(body);
      }
    }
  );
});

app.get("*", (req, res) => {
  res.render("404", {
    errorText: "Page not found!",
    title: "404",
    name: "Gillpreet",
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
