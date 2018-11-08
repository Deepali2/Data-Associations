const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectID;
mongoose.connect("mongodb://localhost:27017/blog-demo_2", {useNewUrlParser: true});
const Post = require("./models/post");
const User = require("./models/user");


//Part 3
console.log(User);
console.log(Post);
Post.create({
  title: "Part 4 how to lose weight",
  content: "Stop eating"
}, function(err, post) {
  if (err) console.log(err);
  else {
    User.findOne({email: "bob@gmail.com"}, function(err, user) {
      if (err) console.log(err);
      else {
        user.posts.push(post); 
        user.save(function(err, data) {
          if (err) console.log(err);
          else console.log(data);
        }); 
      } 
    });
  }
});

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user) {
//   if (err) console.log(err);
//   else console.log(user);
// });

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