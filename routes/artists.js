import express from 'express'
import { getArtist, getArtists, addArtist, updateArtist, deleteArtist } from '../controllers/artists.js' 
import { verifyToken } from '../middleware/auth.js'

const router = express.Router();

router.get('/', verifyToken, getArtists)
router.get('/:id', verifyToken, getArtist)
router.post('/', verifyToken, addArtist)
router.put('/:id', verifyToken, updateArtist)
router.delete('/:id', verifyToken, deleteArtist)

export default router
