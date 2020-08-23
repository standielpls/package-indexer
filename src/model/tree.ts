interface Node {
    Name: String,
    Dependencies: Node[],
}

export interface Graph {
    index: Map<string, Node>,
    addFn(this: Graph): void,
    getFn(this: Graph): boolean,
}


function getFn(this) {
    console.log('hello??')
    console.log(this);
}

getFn()