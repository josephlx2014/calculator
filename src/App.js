import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1> Hello {counter}</h1>

      <button onClick={() => dispatch(increment())}>Add</button>
      <button onClick={() => dispatch(decrement())}>Reduce</button>

      {isLogged ? <h3>you are logged</h3> : <h2> you are not logged </h2>}
    </div>
  );
}

export default App;
