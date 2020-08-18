import server from "./server";
import config from "./config";

let app = {};

server.listen(config.port, () => {
    console.log(
        "App is running at localhost:%d",
        config.port,
    )
    console.log("Press cmd/ctrl+c to stop.")
})

export default app;