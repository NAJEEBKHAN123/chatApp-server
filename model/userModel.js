const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,  // ✅ Fixed 'require' to 'required'
    },
    email: {
      type: String,
      required: true,  // ✅ Fixed
      unique: true,
    },
    password: {
      type: String,
      required: true,  // ✅ Fixed
      minlength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
