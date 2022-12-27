import { useDispatch, useSelector } from "react-redux";
import "./App.css";

export function AppHooks() {
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: "counter/increment" });
  };
  const handleIncrementAmount = () => {
    dispatch({ type: "counter/incrementAmount", payload: 5 });
  };
  const handleDecrement = () => {
    dispatch({ type: "counter/decrement" });
  };
  return (
    <div className="App">
      <h1>React + Redux com Hooks</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAmount}>Increment by Amount</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
