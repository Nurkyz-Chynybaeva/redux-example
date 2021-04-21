  
const initialState = {
    number: 0,
};
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
    case "increment_by_1":
        return { ...state, number: state.number + 1 };
    case "decrement_by_1":
        return { ...state, number: state.number - 1 };
    case "increment_by_10":
        return { ...state, number: state.number + 10 };
    case "decrement_by_10":
        return { ...state, number: state.number - 10 };
    case "multiplication_by_2":
        return { ...state, number: state.number * 2 };
    case "division_by_2":
        return { ...state, number: state.number / 2 };
    case "random":
        return { ...state, number: Math.floor(Math.random () * 10000)};
    case "reset":
        return {...state , number: state.number = 0};
    case "count_to_0":
        return {...state , number: setTimeout(function countDown(){ state.number - 1}, 1000)};
    }
    return state;
  }
  export default counterReducer;