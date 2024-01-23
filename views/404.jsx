const React = require('react')
const Default = require('./layouts/default')

function error404 () {
    
    return (
        <html>
            <head>
                <title>Page Not Found</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/main.css" />
            </head>
            <body>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>The page you are looking for doesn't exist.</p>    
                <li><a href="/breads">Go Home</a></li>       
            </main>
            </body>
        </html>
    )
}
module.exports = error404