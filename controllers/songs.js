import Album from '../models/Album.js'

export const getSongs = async (req, res) => {
    try {
        const album = await Album.findById(req.params.albumId)
        const { albumName } = req.query
    
        if (albumName) {
            album.songs = album.songs.filter((item) => item.albumName == year)
        }

        if (album.songs.length !== 0)
            res.status(200).json(album.songs)
        else
            res.status(204).send()
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const getSong = async (req, res) => {
    try {
        const { albumId, id } = req.params
        const album = await Album.findById(albumId)
        const song = album.songs.id(id)

        if (course)
            res.status(200).json(song)
        else
            res.status(404).json({ error: 'resource not found' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const addSong = async (req, res) => {
    try {
        const newSong = req.body
        const album = await Album.findById(req.params.albumId)
        album.songs.push(newSong)
        await album.save()
        const idNewSong = album.songs.id[album.songs.length-1]._id
        res.status(201).json({ id: idNewSong })
    } catch (err) {
        res.status(500).json({ errpr: err.message })
    }
}

export const deleteSong = async (req, res) => {
    try {
        const { albumId, id } = req.params
        const album = await Album.findById(albumId)
        album.songs.id(id).remove();
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message})
    }
}

export const updateSong = async (req, res) => {
    try {
        const { albumId, id } = req.params
        const album = await Album.findById(albumId)

        const {code, songName, description} = req.body
        album.songs.id(id).code = code
        album.songs.id(id).songName = songName
        album.songs.id(id).description = description

        await album.save()
        res.status(204).send()
    } catch (err) {
        console.log(err)
        res.status(404).json({ error: err.message })
    }
}