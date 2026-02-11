import express from 'express';
import { adminLogin, approveComment, deleteCommentById, getAllComments, getBlogsAdmin, getDashboard } from '../controllers/admin.controller.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post("/login", adminLogin);
router.get('/comments', auth, getAllComments)
router.get('/blogs', auth, getBlogsAdmin)
router.delete('/delete-comment', auth, deleteCommentById)
router.post('/approve-comment', auth, approveComment)
router.get('/dashboard', auth, getDashboard);

export default router