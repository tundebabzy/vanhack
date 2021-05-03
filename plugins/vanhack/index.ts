import {Plugin} from "@hapi/hapi";
import {routes} from "./routes";

interface Options {}

const plugin: Plugin<Options> = {
    name: 'vanhack',
    version: '0.0.1',
    register: async server => {
        server.route(routes);
    }
}

export default plugin;
