import * as net from "net";
import config from './config';
import readline from 'readline';

// readline.createInterface establishes the relationship between io.
const rs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let client = new net.Socket();
client.connect(config.port, () => {
    rs.question(`What's your name?\n>`, (name) => {
        client.write(name)
    });
});

client.on('data', data => {
	console.log('Received: ' + data);
	// client.destroy(); // kill client after server's response
});

client.on('close', () => {
	console.log('Connection closed');
});


