import React, { useState, useEffect } from 'react';

function View() {
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
<div key={index}
//estilos de caja 
style={{

    border: '1px solid blue',
    borderRadius: '8px',
    margin: '20px'
}}
>
<p>Asignatura: <br /> {item.asignature}</p>
<p>Fecha: {item.date}</p>
</div>

))}
      </ul>
    </div>
  );
}

export default View;
