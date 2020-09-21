var express = require('express');
var router = express.Router();
var postController = require('../controllers/post.controller');
/**
 * TASK:
 * CREATE THE ROUTES _________________________________________________________ 
 */
router.get('/', postController.findAllPost);

/**
 * GET Route to find user by id
 */
router.get('/:idPost', postController.findOnePost);
/**
 * POST Route to create user
 */
router.post ('/',postController.createPost);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idPost',postController.updatePost);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idPost',postController.deletePostByidPost);
/**
 * DELETE Route to delete all users
 */
router.get ('/:idUser',postController.findPostByUser);
  

module.exports = router;
  