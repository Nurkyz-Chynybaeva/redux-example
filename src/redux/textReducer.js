const initialState = {
    text: "",
}

const textReduser = (state = initialState, action)  => {
    const newState = { ...state };
    switch (action.type) {
        case "set_text":
            newState.text = action.text;
            return newState;
    }
    
    return state;
}
 
export default textReduser;