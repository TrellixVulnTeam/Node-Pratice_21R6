const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const kajalMiddleware = (req, res, next) => {
    console.log(res);
    next()

}
app.use(express.static(path.join(__dirname, 'public')))
app.use(kajalMiddleware);
app.get('/hello', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    // res.send('Its about page!')
    // res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500);
    res.json({ "Name": "kajal" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})