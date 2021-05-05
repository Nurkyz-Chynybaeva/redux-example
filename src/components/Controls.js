
import { useState } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    function addCallback(){
        dispatch({type: "ADD", text: {text}})
    }
    return ( <div>
        <input onChange={({target})=>setText(target.value)} type="text" name="name" id="id"/>
        <button onClick={addCallback}>Add</button>
    </div> );
}
 
export default Controls;