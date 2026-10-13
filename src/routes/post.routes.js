import { Router } from 'express';
import * as controller from '../controllers/post.controller.js';

const router = Router();

router.post('/post/:user', controller.createPost);

router.get('/post/:postId', controller.getPostById);

router.patch('/post/:postId/like', controller.addLike);

router.get('/posts/author/:user', controller.getPostsByAuthor);

router.patch('/post/:postId/comment/:commenter', controller.addComment);

router.delete('/post/:postId', controller.deletePost);

router.get('/posts/tags', controller.getPostsByTags);

router.get('/posts/period', controller.getPostsByPeriod);

router.patch('/post/:postId', controller.updatePost);

export default router;