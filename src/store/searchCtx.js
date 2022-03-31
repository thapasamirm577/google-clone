import { createContext, useReducer } from "react";

const initialState = {
    state:{},
    dispatch:()=>{},
}

const initialStateR={
    value:"",
    data:{}
}
const searchReducer = (state,action)=>{
    switch (action.type) {
        case "SET":
            return state = {...state, value: action.payload};
        case "SEARCH":
            return state = {...state, data: action.payload};
               
        default:
            console.log("nothing parsed");
            break;
    }
}

export const searchContext = createContext(initialState);

const ContextProvider = (props)=>{
    const [state,dispatch] = useReducer(searchReducer,initialStateR);
    console.log(state);
    return(
        <searchContext.Provider value={
            {
                state: state,
                dispatch: dispatch
            }
        } >
            {props.children}
        </searchContext.Provider>
    )
}

export default ContextProvider;