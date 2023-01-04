import mongoose from 'mongoose'

export const SongSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        songName: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true}
)

const Song = mongoose.model('Song', SongSchema)
export default Song