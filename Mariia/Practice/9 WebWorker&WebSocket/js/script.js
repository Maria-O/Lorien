window.onload = function() {

    // Get references to elements on the page.
    var form = $('#message-form'),
        messageField = $('#message'),
        messagesList = $('#messages'),
        socketStatus =$('#status'),
        closeBtn = $('#close');

    // Create a new WebSocket.
    var socket = $(new WebSocket('ws://echo.websocket.org'));
    var worker = new Worker('js/worker.js');

    worker.addEventListener('message', function(e) {
        message = e.data;
        socket.get(0).send(message);
    }, false);

    // Handle any errors that occur.
    socket.on('error', function(error) {
        console.log('WebSocket Error: ' + error);
    });

    // Show a connected message when the WebSocket is opened.
    socket.on('open', function(event) {
        socketStatus.text('Connected to: ws://echo.websocket.org');
        socketStatus.addClass('open');
    });

    // Handle messages sent by the server.
    socket.get(0).onmessage = function(event) {
        var message = event.data;
        messagesList.append('<li class="received"><span class="message-status">Received:</span>' + message + '</li>');
    };

    // Show a disconnected message when the WebSocket is closed.
    socket.on( 'close', function(event) {
        socketStatus.text('Disconnected from WebSocket.');
        socketStatus.addClass('closed');
    });

    // Send a message when the form is submitted.
    form.on('submit', function(e) {
        e.preventDefault();

        // Retrieve the message from the textarea.
        var message = messageField.val();

        worker.postMessage(message);

        // Add the message to the messages list.
        messagesList.append('<li class="sent"><span class="message-status">Sent:</span>' + message + '</li>');

        // Clear out the message field.
        messageField.val('');

        return false;
    });

    // Close the WebSocket connection when the close button is clicked.
    closeBtn.on('click', function(e) {
        e.preventDefault();

        // Close the WebSocket.
        socket.get(0).close();

        return false;
    });

};