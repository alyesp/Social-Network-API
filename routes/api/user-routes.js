const router = require('express').Router();
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// api/user
router.route('/').get(getAllUser).post(createUser);

//api/user/:id
router.route('/:id').get(getUserById).post(updateUser).delete(deleteUser);

// api/user/:userId/friends/:friendId
router.route('/userId/friend/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;