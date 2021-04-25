import {useDisplay} from "react-redux";

const TextSimpleControls = () => {
    const dispatch = useDispatch();
    function textChangeCallback({target}) {
        dispatch ({type : "set_text" , text:target.value})
    }

    return (
        <div>
            <h2>Simple controls</h2>
            <input type = "text" onChange = {textChangeCallback} />
        </div>
    )


}

export default TextSimpleControls;