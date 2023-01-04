import Artist from "../models/Artist.js"

export const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find()
        if (artists.length !== 0)
            res.status(200).json(artists)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getArtist = async (req, res) => {
    try {
        const { id } = req.params
        const artist = await Artist.findById(id)
        if (artist)
            res.status(200).json(artist)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addArtist = async (req, res) => {
    try {
        const { code, fullName, yearsActive } = req.body
        const newArtist = await Artist.create({
            code,
            fullName,
            yearsActive
        })
        const savedArtist = await newArtist.save()
        res.status(201).json({ id: savedArtist.id })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteArtist = async (req, res) => {
    try {
        await Artist.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}

export const updateArtist = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const { code, fullName, yearsActive } = req.body
        const update = {
            code: code,
            fullName: fullName,
            yearsActive: yearsActive
        }

        await Artist.findOneAndUpdate(filter, update)
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}