const express = require("express");

const app = express();
const PORT = 1912;
app.use(express.json());


app.get("/", (req, res, next) => {
  res.status(200).json({
    status: true,
    message: "Reached home",
  });
});

app.use((req, res, next) => {
  console.log("Fetching All Books...");
  next();
});

app.get("/books", (req, res, next) => {
  res.status(200);
  res.send("Accessing all books here...");
});

app.get("/books/:name", (req, res, next) => {
  let param = req.params;
  res.status(200).json({
    status: true,
    message: "Reached single book here...",
    bookName: param.name,
  });
});

// Driver code
app.listen(PORT, () => console.log(`REST with Middlewares App listening on port ${PORT}!`));