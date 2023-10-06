import React,{useEffect, useState} from 'react'
import {useForm} from 'react-hook-form'
import { pos, } from './components/Ft'
function App() {
  useEffect(() => {
    ft()
  
    return () => {
      
    }
  }, [ ]);

  const [state, setstate] = useState();
const ft = async () => {
  const resp = await fetch('http://localhost:8000/clase/api/api/')
  .then(resp => resp.json())
  .then(data => {setstate(data)})
}
console.log(state)
  const {register, handleSubmit}= useForm()
const hs = handleSubmit (async(data) => {
await pos(data)
})

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
  state.map(item =>{
    <li key={item.id}>{item.date}</li>
  })
}
</ul>

    </div>
  )
}

export default App