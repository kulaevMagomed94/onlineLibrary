const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: String,
    isBlocked: {
      type: Boolean,
      default: false,
    },
    rentedBook: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Book", default: null },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
