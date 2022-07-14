import axios from 'axios';

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL, //YOUR_API_URL HERE
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/json',
        'x-apikey': 'GZMdJn2SkQewUGtZK1rSY41dGlleazUg',
        'Accept': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
    },
});

export default authAxios;
