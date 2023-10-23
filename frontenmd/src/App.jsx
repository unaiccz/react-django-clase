import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { pos } from "./components/Ft";
import View from "./components/View";
import Swal from "sweetalert2";
import ApuntesView from "./apuntes/ApuntesView";

function App() {
  const rl = () => window.location.reload();

  const { register, handleSubmit } = useForm();

  const hs = handleSubmit( (data, event) => {
    event.preventDefault();
     pos(data);
    console.log(data)
  });

  return (
    <div
    style={{ border:"1px dashed", padding: '6px', margin: '6px'}}
    >
      <h1>Examenes</h1>
          <form onSubmit={hs}>
       <div className="mb-3 mx-5">
       <input
          type="text" className="form-control"
          placeholder="asignature"
          {...register("asignature")}
        />
        <input {...register("date")}  className="form-control" placeholder="Fecha"/>
        <button type="submit" className="btn btn-primary" onClick={()=>   Swal.fire('examen añadido, please reload')}>send</button>
        <br />
        <button onClick={rl} className="btn btn-danger">Reload</button>
       </div>
      </form>
      <hr />
      <View/>
      <hr />
      <ApuntesView/>
    </div>
  );
}

export default App;
//work