
import { useContext, useReducer, useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/reducer";
import axios from "axios";

// const API = "/Api/Item-Supplier/Save-Items-Suppliers"


const Appcontex = createContext();
const initialState = {
    items:true
}

const [state, dispatch] = useReducer(reducer, initialState)

const AppProvider = ({ children }) => {
    return <Appcontex.Provider value={{ ...state }}>
        {children}
    </Appcontex.Provider>
}

const setItemVeiw=()=>{
    dispatch({type:"SET_ITEM_VIEW"})
}

const postData = async (url) => {
    try {
        const res = await axios.post('url')
        const data=res.data;
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

useEffect(() => {
    postData(API);
}, [])





const useGlobleContex = () => {
    return useContext(Appcontex);
}

export { AppProvider, }