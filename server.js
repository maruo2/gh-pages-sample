const connect = require('connect');
const serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8808, ()=>{
  console.log('Server running on 8808...');
});
