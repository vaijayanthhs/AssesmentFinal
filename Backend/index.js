// index.js (Backend)

const express = require("express");
const cors = require("cors");
require("./connection");
const BlogModel = require("./model");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    const blogData = req.body;
    const newBlog = new BlogModel(blogData);
    await newBlog.save();
    res.status(201).json({ message: "Blog post added successfully" });
  } catch (error) {
    console.log("Error adding blog:", error);
    res.status(500).json({ message: "Failed to add blog post" });
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await BlogModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.log("Error deleting blog:", error);
    res.status(500).json({ message: "Failed to delete blog post" });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    await BlogModel.findByIdAndUpdate(id, updatedData);
    res.status(200).json({ message: "Blog post updated successfully" });
  } catch (error) {
    console.log("Error updating blog:", error);
    res.status(500).json({ message: "Failed to update blog post" });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});