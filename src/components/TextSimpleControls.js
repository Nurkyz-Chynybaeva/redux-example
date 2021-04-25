import { useDispatch } from "react-redux"

const TextSimpleControls = () => {
    const dispatch = useDispatch()

    function textChangeCallBack({ target }) {
        dispatch({ type: "set_text", text: target.value })
    }
    return ( 
        <div>
            <input type="text" onChange={textChangeCallBack} />
        </div>
    );
}
 
export default TextSimpleControls;