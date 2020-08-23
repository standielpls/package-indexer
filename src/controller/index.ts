import * as net from "net";

class Controller {
    handle(message: string): string {
        console.log('hello?', message);
        
    return '';
}

 parseMessage(message: string): string {
    let args = message.split("|")
    if (args.length != 3) {
        throw Error("bad!")
    }

    this.get('hello')

    return ""
}

    get(message: string): boolean {
        return true
    }
}

export default Controller;