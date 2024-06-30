import axios from "axios";

const _controller = axios.create({
    baseURL : 'https://coinmarketcap.com'
})

export {_controller}