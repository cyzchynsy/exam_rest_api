import express from 'express'
import { getAlbum, getAlbums, addAlbum, updateAlbum, deleteAlbum } from '../controllers/albums.js'
import { verifyToken } from '../middleware/auth.js'

const router = express.Router({mergreParams: true})

router.get('/', verifyToken, getAlbums)
router.get('/:id', verifyToken, getAlbum)
router.post('/', verifyToken, addAlbum)
router.put('/:id', verifyToken, updateAlbum)
router.delete('/id:', verifyToken, deleteAlbum)

export default router