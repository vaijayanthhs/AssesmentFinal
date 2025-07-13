const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vaijayanthhs1:vaijayanthhs110604@cluster0.b30e5vr.mongodb.net/Final_Project?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });