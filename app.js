// Importing modules.
import express from "express";

// Initializing.
const app = express();
const port = 3000;

// Setting middleware.
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Setting important variables.
let posts = [];
let postsId = 1;

// Date and Time function.
function myDateTime() {
  const myDay = new Date().getDate();
  const myMonth = new Date().getMonth() + 1;
  const myYear = new Date().getFullYear();
  const mySecond = new Date().getSeconds();
  const myMinute = new Date().getMinutes();
  const myHours = new Date().getHours();
  return `${myDay}/${myMonth}/${myYear} | ${myHours}:${myMinute}:${mySecond}`;
}

// -- Main Scripts.

// -- Homepage Script.
// -- "Get" root/homepage.
app.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

// -- New Script.
// -- "Get" new post form.
app.get("/posts/new", (req, res) => {
  res.render("new");
});

// -- "Post" new blog post.
app.post("/posts/new", (req, res) => {
  if (!req.body["textBox"] || req.body["textBox"].trim() === "") {
    return res.redirect("/");
  }
  const newPost = {
    id: postsId++,
    title: req.body["textBox"],
    content: req.body["textBox-body"],
    dateTime: myDateTime(),
  };
  posts.push(newPost);
  console.log("Title -", req.body["textBox"]);
  console.log("Content -", req.body["textBox-body"]);
  res.redirect("/");
});

// -- Delete Script.
// -- "Post" delete blog post.
app.post("/posts/delete/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  const postIndex = posts.findIndex((current) => current.id === postID);

  if (postIndex === -1) {
    res.status(404).send("The post you are looking for is not available!");
  } else {
    posts.splice(postIndex, 1); // Remove the post at the found index
    res.redirect("/");
  }
});

// -- Update Script.
// -- "Get" Update blog post.
app.get("/posts/update/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  const post = posts.find((current) => current.id === postID); // Corrected 'if' to 'id'

  if (!post) {
    res.status(404).send("The post you are looking for is not available!");
  } else {
    res.render("update", { post: post });
  }
});

// -- "Post" Update blog post.
app.post("/posts/update/confirm/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  const post = posts.find((current) => current.id === postID);

  if (!post) {
    res.status(404).send("The post you are looking for is not available!");
  } else {
    // Update the post details with new values
    post.title = req.body["textBox"];
    post.content = req.body["textBox-body"];
    post.dateTime = myDateTime(); // Update date/time if necessary

    res.redirect("/"); // Redirect after updating the post
  }
});

// -- Show Script.
// -- "Get" show individual post.
app.get("/posts/show/:id", (req, res) => {
  const postID = parseInt(req.params.id);
  const post = posts.find((current) => current.id === postID);

  if (!post) {
    res.status(404).send("The post you are looking for is not available!");
  } else {
    res.render("show", { post: post });
  }
});

// Starting server.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
