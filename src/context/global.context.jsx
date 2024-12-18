import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from "axios";

export const initialState = { theme: false, data: [] };

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  }, []);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeState = () => useContext(ContextGlobal);
