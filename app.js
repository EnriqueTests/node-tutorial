const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Welcome to our hme page')
    res.end()
})

server.listen(5000)