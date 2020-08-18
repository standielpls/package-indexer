interface Node {
    Name: String,
    Dependencies: Node[],
}

export interface Graph {
    index: Map<string, Node>,
    addFn(this: Graph): void,
}
