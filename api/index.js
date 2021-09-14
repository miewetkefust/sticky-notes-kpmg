import express from 'express'
import fs from 'fs'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

const rawdataUsers = fs.readFileSync('dummy-data-users.json')
const rawdataNotes = fs.readFileSync('dummy-data-reviewnotes.json')
const users = JSON.parse(rawdataUsers)
const reviewNotes = JSON.parse(rawdataNotes)

const fullNotes = reviewNotes.map(note => {
    const ass = note.assignees
    const detailedAss = ass.map(a => users.find(u => u.id === a.$oid))
    note.assignees = detailedAss
    return note
})

app.get('/', (req,res) => {
    res.send(fullNotes)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})