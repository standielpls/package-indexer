import * as net from "net";

class Controller {
    Handle(message: string): string {
        try {
        
        } catch {

        }
    }
}

function parseMessage(message: string): string {
    let args = message.split("|")
    if (args.length != 3) {
        throw Error("bad!")
    }

    return ""
}

export default Controller;