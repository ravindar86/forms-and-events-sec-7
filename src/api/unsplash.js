import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID ylNA5YvZxdVpA3JlDDzHLKGiLORiRdULnHZScox_KUM"
    }
});
