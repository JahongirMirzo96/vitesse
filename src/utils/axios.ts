import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        'Content-Type': 'applications/json',
    },
})

export default instance