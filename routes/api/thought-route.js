const router = require('express').Router();

const { 
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// api/thoughts
router.route('/').get(getAllThought).post(createThought);

//api/thoughts/:id
router.route('/:id');
router.get(getThoughtById);
router.put(updateThought);
router.delete(deleteThought);

// api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reaction').post(addReaction);

// api/thoughts/:thoughtIs/reactions/:reactionId
router.route('/:thoughtId/reaction/:reactionId').delete(removeReaction);

module.exports = router;

