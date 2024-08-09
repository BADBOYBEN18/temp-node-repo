const http = require('http');

//? creating a sever
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('welcome to this endpoint');
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
  }

  res.end(
    `<h1>Oops!</h1>
		<p>we cant seem to find that your are looking for</p>
		<a href='/'>click this link to take you to our home page </a>
		`
  );
});

const port = 5000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
