const app = require('./app');
const http = require('http');


const server = http.createServer(app);
const port = 3003;


server.listen(port, () => {
  console.log(`Corriendo en el puerto: ${port}`);
  console.log(`Su servidor inicio en: http://localhost:${port}/`);
});

