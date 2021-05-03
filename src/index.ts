import {Manifest} from "./manifest";
import {startServer} from "./server";

const manifest = Manifest;

const init = async () => {
    await startServer(manifest);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
