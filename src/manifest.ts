import {Manifest} from "@hapi/glue";
import {VanhackPlugin} from "../plugins";

const Manifest: Manifest = {
    server: {
        port: 3000,
        host: 'localhost'
    },
    register: {
        plugins: [{plugin: VanhackPlugin}]
    }
}

export {Manifest}
