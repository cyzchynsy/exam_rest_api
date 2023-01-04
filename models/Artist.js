import mongoose from 'mongoose'

const ArtistSchema = new mongoose.Schema (
    {
        code: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        yearsActive: { type: Number, required: true }
    },
    { timestamps: true }
)

const Artist = mongoose.model ('Artist', ArtistSchema)
export default Artist