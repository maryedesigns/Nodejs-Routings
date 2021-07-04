const http = require('http')

const hostname = '127.0.0.1'

const port = 3000

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader = ('Content-Type', 'text/html')
    // res.end(`Server is running at ${hostname} hostname and ${port} port`)

 const fs = require('fs')

    let path = req.url

    if(path === '/home'){
        fs.readFile('./index.html', (err, data) => {
            res.end(data)
        })
    }

    else if(path === '/about'){
        fs.readFile('./about.html', (err, data) => {
            res.end(data)
        })
    }

    else if(path === '/contact'){
        fs.readFile('./contact.html', (err, data) => {
            res.end(data)
        })
    }

    else if(path === '/about-us'){
        fs.readFile('./about.html', (err, data) => {
            res.end(data)
        })
    }

    else if(path !== '/home', '/about', '/about-us', '/contact'){
        // fs.readFile('./error.html', (err, data) => {
            res.end('<h1>Error.html</h1>')
        // })
    }

})

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`)
})