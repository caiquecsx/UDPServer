var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function () {
    var address = server.address();
    console.log('UDP Server iniciado: ' + address.address + ":" + address.port);
});

/**
 * A função de mensagem é chamada ao receber pacotes udp do cliente
 * O evento de escutar 'listening' é chamado quando o servidor é iniciado e está apto a receber pacotes
 * dgram.createSocket aceita udp4 e udp6, que por sua vez utiliza ipv4 ou ipv6
 */

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);