const socket = io();


function render(data) {
    console.log(data);
    var html = data.map(function(elem, index) {
        return (`<div><strong>${elem.author}</strong>
        <em>${elem.text}<em></div>`)
    }).join(" ");

    document.getElementById('messages').innerHTML = html;



}
socket.on('messages', function(data) { render(data); })

function addMessage(e) {
    var message = {
        author: document.getElementById('username').value,
        text: document.getElementById('message').value
    }
    console.log(message);

    socket.emit('new-message', message);
    return false
}