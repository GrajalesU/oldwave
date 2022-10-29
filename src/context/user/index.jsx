import React, { useContext, useReducer, createContext } from "react";

const UserContext = createContext(null);
const DispatchContext = createContext(null);

export const USER_DEFAULT = {
  name: "",
  picture: "",
  email: "",
};

const localUser = window.localStorage.getItem("user");

const userState = localUser ? JSON.parse(localUser) : USER_DEFAULT;

export const reducer = (state, action) => {
  switch (action?.type) {
    case "login":
      window.localStorage.setItem("user", JSON.stringify(action.value));
      return { ...action.value };
    case "logout":
      window.localStorage.removeItem("user");
      return { ...USER_DEFAULT };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, userState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </DispatchContext.Provider>
  );
};

export { UserProvider };
export const useUser = () => useContext(UserContext);
export const useDispatch = () => useContext(DispatchContext);
export { UserContext };
