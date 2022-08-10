/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/expenses';
const router = express.Router();

router.get('/transactions', controller.getTransactions);
// router.get('/posts/:id', controller.getPost);
// router.put('/posts/:id', controller.updatePost);
// router.delete('/posts/:id', controller.deletePost);
// router.post('/posts', controller.addPost);

export default router;