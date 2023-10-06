import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { pos } from "./components/Ft";

function App() {
useEffect(() => {
ft();

return () => {};
}, []);

const [state, setState] = useState();

const ft = async () => {
const resp = await fetch("http://localhost:8000/clase/api/api/");
const data = await resp.json();
setState(data);
};

console.log(state);

const { register, handleSubmit } = useForm();

const hs = handleSubmit(async (data) => {
await pos(data);
});


return (
  <div>
    <h3>form</h3>
    <form onSubmit={hs}>

<input type="text" placeholder='asignature'
{...register('asignature')}
/>
<input
{...register('date')}
/>
<button type='submit'>
send
</button>

    </form>






<ul>
{
    state.map((item) => {
const {id,asignature,date} = item
  return ( 

    <>
  <div style={{
border: '1px solid',
borderRadius: '5px',
margin: '9px'
  }}>
  <p>asignatura: <h3>{asignature}</h3></p>
    <br />
    <p>fecha: <h3>{date}</h3></p>
  </div>
    </>
  )    
    }
        ) 

    
    }
</ul>
    </div>
)

}

export default App;