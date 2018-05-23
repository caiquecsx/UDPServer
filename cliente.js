var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var message = new Buffer('Mensagem do cliente para o servidor !');

/**
 * O metodo de envio, requer um buffer e não uma simples mensagem do tipo string
 * O segundo parametro, indica onde a mensagem deve iniciar o envio
 * O terceiro parametro indica o tamanho em bytes do pacote
 * Não é o caso, mas em Buffers grandes é necessario iterar o buffer e enviar pequenos pacotes UDP
 * Exceder o tamanho do pacote não gera erro, o pacote será dropado como é de natureza do UDP
 * 
 * */


client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    if (err) throw err;
    console.log('UDP mensagem enviada para: ' + HOST +':'+ PORT);
    client.close();
});