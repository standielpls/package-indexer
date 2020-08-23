import * as net from "net";
import Controller from "./controller/index";

let ctrl = new Controller();

const server = net.createServer((socket: net.Socket) => {
    socket.on("data", data => {
        let message = data.toString()
        ctrl.handle(message);
        socket.write(`read ${message}`)
    })
})


export default server;
