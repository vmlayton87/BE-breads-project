
const React = require('react')

function Default(html) {
  return (
    <html>
      <head>
        <title>{html.title || `Default`}</title>
        <link rel="shortcut icon" type="image/jpg" href="images/jamie-street-tb5A-QTI6xg-unsplash.jpg"/>
        {/* Photo by <a href="https://unsplash.com/@jamie452?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jamie Street</a> on <a href="https://unsplash.com/photos/heart-shaped-bowl-with-strawberries-tb5A-QTI6xg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
   */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" integrity="sha512-EZLkOqwILORob+p0BXZc+Vm3RgJBOe1Iq/0fiI7r/wJgzOFZMlsqTa29UEl6v6U6gsV4uIpsNZoV32YZqrCRCQ==" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1><a href="/breads">Main List/Index</a></h1>
          </header>
        
          <div className="container">
              {html.children}
          </div>
        </div>
      </body>
    </html>
  )
}


module.exports = Default
