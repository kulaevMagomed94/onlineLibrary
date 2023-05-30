const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3300;
mongoose
  .connect(
    "mongodb+srv://Magomed:2403kma@cluster0.96gehwd.mongodb.net/onlineLibrary?retryWrites=true&w=majority"
  )
  .then(() => console.log("ok"))
  .catch(() => console.log(err));

app.use(express.json());
app.use(require("./routes/genres.routes"));
app.use(require("./routes/books.routes"));
app.use(require("./routes/review.routes"));
app.use(require("./routes/users.routes"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("ok");
  }
});
