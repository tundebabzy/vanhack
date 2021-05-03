import {compose, Manifest, Options} from "@hapi/glue";

const options: Options = {
    relativeTo: __dirname
};

const startServer = async (manifest: Manifest) => {
    try {
        const server = await compose(manifest, options);
        await server.start();
        console.log(`server running on ${server.info.uri}`);
        return server;
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

export { startServer }
