import { useSelector } from "react-redux";

const TextDisplay = () => {
    const text = useSelector(store => store.text.text)
    
    return ( 
        <div>
            
            {text}

            <p>fjeijfei</p>
        </div>
    );
}
 
export default TextDisplay;
