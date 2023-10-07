import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
function View() {
  const del = (id,) => {
axios.delete(`http://localhost:8000/clase/api/api/${id}/`)
Swal.fire(`item ${id} deleted`)
  }
  const [ex, setEx] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('http://localhost:8000/clase/api/api/');
        if (!res.ok) {
          throw new Error('Error en la solicitud a la API');
        }
        const data = await res.json();
        setEx(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Examenes venideros</h3>
      <hr />
      <ul>
        {ex.map((item, index) => (
<div key={index} className='card'
//estilos de caja 
>
  <p>id: {item.id}</p>
<p className='card-title'>Asignatura: <br /> {item.asignature}</p>
<p className='card-text'>Fecha: {item.date}</p>
<button className='btn btn-danger w-5' onClick={()=> del(item.id)}>DELETE</button>
</div>

))}
      </ul>
    </div>
  );
}

export default View;
