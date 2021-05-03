import {ServerRoute} from "@hapi/hapi";
import {AxiosRequestConfig} from "axios";
const axios = require('axios').default;

const routes: ServerRoute = {
    method: "GET",
    path: '/jobs/',
    handler: async request => {
        const path: string = 'https://api-vanhack-prod.azurewebsites.net/v1/job/search/full/';
        const config: AxiosRequestConfig = {
            params: request.query
        }
        try {
            const response = await axios.get(path, config);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
};

export { routes };
