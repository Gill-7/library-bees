const request = require("postman-request");

const bookStore = (name, startIdx, limit, callback) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${name}&startIndex=${parseInt(
    startIdx
  )}&maxResults=${parseInt(limit)}&key=AIzaSyDhGDUQkzc9AclCA-AI1nfPdEafgjlplJ4`;

  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback("Unable to connect to the bookstore services", undefined);
    } else if (body.items.length === 0) {
      callback("Unable to find the book info", undefined);
    } else {
      callback(undefined, body);
    }
  });
};

module.exports = bookStore;
