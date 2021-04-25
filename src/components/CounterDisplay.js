import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const number = useSelector(store.counter.number);
  return (
   <div>
     <h1>number</h1>
       {number}
   </div> 
    
  );
}
export default CounterDisplay;