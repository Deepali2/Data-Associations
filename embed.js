const mongoose = require ("mongoose");
const ObjectId = require("mongodb").ObjectID;

mongoose.connect("mongodb://localhost:27017/blog-demo", { useNewUrlParser: true });

//POST
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

//USER 
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
const User = mongoose.model("User", userSchema);

// let newUser = new User({
//   email: "hermione@.edu",
//   name: "Hermione Granger"
// });
// newUser.posts.push({
//   title: "How to brew polyjuice potion",
//   content: "Just kidding. Go to potions class to learn it!"
// });

// newUser.save(function(err, user) {
//   if (err) console.log("Error in creating a new user");
//   else console.log(user);
// });

// let newPost = new Post({
//   title: "Reflections on Oranges",
//   content: "They are full of vitamin c, good for health and tasty to eat."
// });

// newPost.save(function(err, post) {
//   if (err) console.log("Error in saving a new post");
//   else console.log(post);
// });

// User.findOne({name: "Hermione Granger"}, function(err, user) {
//   if (err) console.log(err);
//   else user.posts.push({
//     title: "3 things I really hate", 
//     content: "Voldemort. Voldemort. Voldemort"
//   });
//   user.save(function(err, user) {
//     if (err) console.log(err);
//     else console.log(user);
//   });
// });