import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '761779da347047fc8e17ede474332ae4'
    }
})