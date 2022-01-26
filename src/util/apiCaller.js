import * as Config from './../constants/config'
import axios from 'axios'

const callApi = (endpoint, method, body) => {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    })
    .catch(err => console.error(err));
}

export default callApi