import axios from 'axios'
// export const Createe = (data) => axios.post('http://localhost:8000/clase/api/api​/',data)
export const pos = (data) => {
axios.post('http://localhost:8000/clase/api/api/', data)
}