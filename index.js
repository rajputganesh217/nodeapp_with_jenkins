app.get('/', function (req, res) {
  res.send(`
    <html>
      <head>
        <title>My Node App</title>
      </head>
      <body style="background-color:#f0f0f0; text-align:center; padding:50px;">
        <h1 style="color: green;">✅ Successfully deployed Node app</h1>
        <p style="color: blue;">Using Docker, Jenkins, and running locally!</p>
      </body>
    </html>
  `);
});
