import axios from 'axios';
const baseUrl = 'https://il3fidykn5.execute-api.us-east-2.amazonaws.com/prod/email';

export const postEmail = (data: object) => {
    const json = JSON.stringify(data)
    axios.post(baseUrl, json)
        .then(r => console.log(r.data))
        .catch(e => console.log(e))
}