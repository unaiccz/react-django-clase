import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { pos } from "./components/Ft";
import View from "./components/View";

function App() {
  const rl = () => window.location.reload();

  const { register, handleSubmit } = useForm();

  const hs = handleSubmit(async (data) => {
    await pos(data);
    console.log(data)
    //
  });

  return (
    <div>
      <h3>form</h3>
      <form onSubmit={hs}>
       <div className="mb-3 mx-5">
       <input
          type="text" className="form-control"
          placeholder="asignature"
          {...register("asignature")}
        />
        <input {...register("date")}  className="form-control" placeholder="Fecha"/>
        <button type="submit" className="btn btn-primary">send</button>
        <br />
        <button onClick={rl} className="btn btn-danger">Reload</button>
       </div>
      </form>
      <View/>
    </div>
  );
}

export default App;
//work