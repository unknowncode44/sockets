const socket = io();

socket.on('mi mensaje', data => {
    alert(data);
    socket.emit('notificacion', 'Mensaje recibido exitosamente')
})

function render(data) {
    var html = data.map(function(elem, index) {
        return (`<div><strong>${elem.author}</strong>
        <em>${elem.author}<em></div>`)
    }).join("");

    document.getElementById('messages').innerHTML = html;


}
socket.on('messages', function(data) { render(data); })