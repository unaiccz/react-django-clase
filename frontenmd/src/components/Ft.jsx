import axios from 'axios'
let result
// export const Createe = (data) => axios.post('http://localhost:8000/clase/api/api​/',data)
export const pos = (data) => {
axios.post('http://localhost:8000/clase/api/api/', data)
}
export const gt = () => {

    return axios.get('http://localhost:8000/clase/api/api/')
}