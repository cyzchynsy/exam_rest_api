import mongoose from 'mongoose'
import { SongSchema } from './Song.js'

const AlbumSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        albumName: { type: String, required: true },
        numberOfSongs: { type: Number, required: true },
        year: { type: Number, required: true },
        artistId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist',
            required: true
        },
        songs: [SongSchema]
    },
    { timestamps: true }
)

const Album = mongoose.model('Album', AlbumSchema)
export default Album