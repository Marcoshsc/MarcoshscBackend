import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})

app.listen(3001, () => {
    console.log('Listening at port 3001')
})