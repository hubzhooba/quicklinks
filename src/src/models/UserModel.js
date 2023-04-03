var mongoose = require('mongoose');

// defines the schema for collection `users`
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },

  avatar: {
    name: String,
    data: Buffer,
    contentType: String
},

  bio: String,

  //link: [String] [String],

  tags: [String],

  links: [String]
});

const User = mongoose.model("User", UserSchema);