import axios from 'axios'
import Swal from 'sweetalert2'
// export const Createe = (data) => axios.post('http://localhost:8000/clase/api/api​/',data)
export const pos = (data) => {
if(data.asignature == "" || data.date == ""){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'rellene los campos!',
        footer: '<a href="">todos son requeridos</a>'
      })
}else{
    axios.post('http://localhost:8000/clase/api/api/', data)
}
}
export const gt = () => {

    return axios.get('http://localhost:8000/clase/api/api/')
}