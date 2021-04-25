const TextDisplay = () =>{
    const text = useSelector(store => store.text.text)

    return (<div>
        <h2>
            text display
        </h2>
        {text}
    </div>) 
}

export default TextDisplay;