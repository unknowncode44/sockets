const express = require('express')

//inicializamos express
const app = express();
//le pasamos la constante app que creamos arriba

const http = require('http').Server(app);

// Le pasamos la constante http

const io = require('socket.io')(http);

app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.sendFile('index.html', {root:__dirname});
})



http.listen(3000, ()=>console.log('Server corriendo en el puerto 3000'))

io.on('connection',(socket)=>{
    console.log('Usuario conectado');
    socket.emit('mi mensaje','Mensaje enviado desde el servidor');

    socket.on('notificacion',data=>{
        console.log(data);
    })
})