import express from 'express'
import { getSong, getSongs, addSong, updateSong, deleteSong } from '../controllers/songs.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getSongs)
router.get('/:id', verifyToken, getSong)
router.post('/', verifyToken, addSong)
router.put('/:id', verifyToken, updateSong)
router.delete('/:id', verifyToken, deleteSong)

export default router