import axios  from "axios";

export const server =  axios.create({
    baseURL: "http:localhost:3030/v1"
})