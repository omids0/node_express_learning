const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to homepage!')
    }
    if(req.url === '/about'){
        res.end('this is history page...')
    }
    res.end(`<h1>Oops!</h1>
        <p>Error 404! note found</p>
        <a href='/'>back</a>`)
})

server.listen(5000)