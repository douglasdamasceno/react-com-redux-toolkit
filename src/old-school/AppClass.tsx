import { connect } from "react-redux/es/exports";
import "./App.css";

function AppClass({ count, increment, incrementAmount, decrement }) {
  const handleIncrement = () => {
    increment();
  };
  const handleIncrementAmount = () => {
    incrementAmount(5);
  };
  const handleDecrement = () => {
    decrement();
  };
  return (
    <div className="App">
      <h1>React + Redux Modo Antigo usado com Class</h1>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrementAmount}>Increment by Amount</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.value,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: "counter/increment" }),
    decrement: () => dispatch({ type: "counter/decrement" }),
    incrementAmount: (amount: number) =>
      dispatch({ type: "counter/incrementAmount", payload: amount }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppClass);
