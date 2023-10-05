import React,{useState} from 'react'
import {useForm} from 'react-hook-form'
import { pos } from './components/Ft'
function App() {

const {register, handleSubmit}= useForm()
const hs = handleSubmit (async(data) => {
  console.log(data)
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



    </div>
  )
}

export default App