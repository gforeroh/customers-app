const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

server.use(middleware);

// server.put('/customers/1', (req, res) => {
//     let body = [];
//     req.on('data', chunk => {
//         body.push(chunk);
//     }).on('end', () => {
//         body = JSON.parse(Buffer.concat(body).toString());
//         console.log(JSON.stringify(body));
//         if(body.age && body.age > 18){
//             console.log("Error de validacion");
//             return res.send({
//                 error: true,
//                 validation: { 
//                     age: 'Debe ser menor de edad',
//                     name: 'El nombre es incorrecto'
//                 }
//             });
//         } else {
//             res.send('Ok')
//         }
//     })
// });


server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
});

server.use(router);
server.listen(3001, () => {
    console.log('JSON Server is runing');
});