const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createGroupChat,
  renameGroup,
  addTosGroup,
  RemoveFromGroup,
  fetchChats,
  accessChat,
} = require("../controller/chatControllers");

const router = express.Router();
router.route("/").post(protect, accessChat);
router.route("/").get(protect, fetchChats);
router.route("/rename").put(protect, renameGroup);
router.route("/group").post(protect, createGroupChat);
router.route("/groupadd").put(protect, addTosGroup);
router.route("/groupremove").put(protect, RemoveFromGroup);
module.exports = router;
