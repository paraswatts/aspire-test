import axios from "axios";
import pickBy from "lodash/pickBy";
import { BASE_URL } from '../constants';

const defaulHeader = {
    headers: {
        "content-type": "application/json"
    }
};

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 20000,
    defaulHeader
});


export const getRequest = ({
    API = ""
}) => {
    return new Promise((resolve, reject) => {
        instance
            .get(API)
            .then(result => {
                resolve(result);
            })
            .catch(error => {
                resolve(error.response);
            });
    });
};


export default instance;
