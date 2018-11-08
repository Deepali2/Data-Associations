const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
mongoose.connect("mongodb://localhost:27017/blog-demo_2", {useNewUrlParser: true});

const postSchema = new mongoose.Schema({
  title: String,
  content: String
});
const Post = mongoose.model("Post", postSchema);

const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  ]
});
const User = mongoose.model("User", userSchema);

//Part 3

// Post.create({
//   title: "Cook it this way",
//   content: "Part 3 says that buy all the ingredients that you wish to put inside your body and make a burger"
// }, function(err, post) {
//   if (err) console.log(err);
//   else {
//     User.findOne({email: "bob@gmail.com"}, function(err, user) {
//       if (err) console.log(err);
//       else {
//         user.posts.push(post); 
//         user.save(function(err, data) {
//           if (err) console.log(err);
//           else console.log(data);
//         }); 
//       } 
//     });
//   }
// });

User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
  if (err) console.log(err);
  else console.log(user);
});

//Part2
// Post.create({
//   title: "How to cook the best burger",
//   content: "buy and eat it"
// }, function(err, post) {
//   if (err) console.log(err);
//   else {
//     User.findOne({email: "bob@gmail.com"}, function(err, user) {
//       if (err) console.log(err);
//       else {
//         user.posts.push(post); 
//         user.save(function(err, data) {
//           if (err) console.log(err);
//           else console.log(data);
//         }); 
//       } 
//     });
//   }
// });

//Part 1
// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// }, function(err, user) {
//   if (err) console.log(err);
//   else console.log(user);
// });