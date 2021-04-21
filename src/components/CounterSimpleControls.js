import { useDispatch } from "redux";


const CounterSimpleControls = () => {
  const dispatch = useDispatch();

  function incrementBy1Callback() {
    dispatch({ type: "increment_by_1" });
  };
  function decrementBy1Callback() {
    dispatch({ type: "decrement_by_1" });
  };
  function incrementBy10Callback() {
    dispatch({ type: "increment_by_10" });
  };
  function decrementBy10Callback() {
    dispatch({ type: "decrement_by_10" });
  };
  function multiplicationBy2() {
    dispatch({ type: "multiplication_by_2" });
  };
  function divisionBy2() {
    dispatch({ type: "division_by_2" });
  };
  function random() {
    dispatch({ type: "random" });
  };
  function reset() {
    dispatch({type: "reset"});
  };
  function countTo0() {
    dispatch({type: "count_to_0"});
  };
  return (
    <div>
      <button onClick={incrementBy1Callback}>+1</button>
      <button onClick={decrementBy1Callback}>-1</button>
      <button onClick={incrementBy10Callback}>+10</button>
      <button onClick={decrementBy10Callback}>-10</button>
      <button onClick={multiplicationBy2}>*2</button>
      <button onClick={divisionBy2}>/2</button>
      <button onClick={random}>Random</button>
      <button onClick={reset}>Reset</button>
      <button onClick={countTo0}>Count to 0</button>
    </div>
  );
}
export default CounterSimpleControls;
