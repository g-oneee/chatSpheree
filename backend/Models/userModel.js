const mongoose = require("mongoose");
const bcyrpt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.matchPassword = async function (eneteredP) {
  return bcyrpt.compare(eneteredP, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcyrpt.genSalt(10);
  this.password = await bcyrpt.hash(this.password, salt);
});
const User = mongoose.model("User", userSchema);
module.exports = User;
