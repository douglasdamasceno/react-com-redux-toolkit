import { useDispatch } from "react-redux";
import "../App.css";
import {
  decrement,
  increment,
  incrementAmount,
} from "./features/counter/counter-slice";
import { useAppSelector } from "./hook";

export function AppToolkit() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementAmount = () => {
    dispatch(incrementAmount(5));
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="App">
      <h1>React + Redux com Toolkit</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAmount}>Increment by Amount</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}
