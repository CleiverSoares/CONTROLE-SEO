import axios from "axios"
import varejoService from "./varejo"

export const httpClient = axios.create({
    baseURL: "https://657e61853e3f5b189463a858.mockapi.io/empresarial/",
    headers: {
        'Content-Type': 'application/json'
    }
})
export default {
    varejo: varejoService(httpClient),
}