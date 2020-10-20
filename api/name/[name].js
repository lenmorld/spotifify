// const app = require('express')()

// app.get('/lenny', (req, res) => {
//     res.setHeader('Content-Type', 'application/json')
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
//     res.json({ message: `Hello World!` })
// })

// app.get('/lenny2', (req, res) => {
//     res.setHeader('Content-Type', 'text/html')
//     res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
//     res.end(`Hello World!`)
// })

// match: api/lenny
// no need to put in vercel.json

module.exports = (req, res) => {
    const {
        query: { name },
    } = req

    res.send(`Hello ${name}!`)
}