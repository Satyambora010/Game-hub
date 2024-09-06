import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: "edd7f19a8f9247a1ad3c4b56a529ef1f",
    },
});