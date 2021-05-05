import { useDispatch, useSelector } from "react-redux";

const Stuff = () => {
    const text = useSelector(state => state.text)
    const dispatch = useDispatch();
    function removeCallback(){
        dispatch({type: "REMOVE"})
    }
    return ( <div>
        <span>{text}</span>
        <button onClick={removeCallback}>Remove</button>
    </div> );
}
 
export default Stuff;