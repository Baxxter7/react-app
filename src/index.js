import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

/* import { Gretting, UserCard } from "./Gretting";
import Product, { Nabvar } from "./Product";

import { Button } from "./Button";
 */
import { TaskCard } from "./Task";
import { Button } from "./Button";
import { Post } from "./Post";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

//const root = ReactDOM(document.getElementById('root')) --Se puede de esa manera

function Counter() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("Render");
  }, [ counter ]); 

  return (
    <div>
      <input onChange={(e) => setMensaje(e.target.value)} />

      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>

      <hr></hr>
      <h1>Counter {counter}</h1>
      <button onClick={ () => setCounter(counter + 1) }>
        Ok
      </button>
    </div>
  );
}

root.render(
  <>
    <Counter></Counter>
  </>
);

//const root = ReactDOM.createRoot(document.getElementById('root'))
