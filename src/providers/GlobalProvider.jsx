import React, { createContext, useState } from "react";

const initialState = {
  user: null,
};

const GlobalContext = createContext(initialState);
const { Provider } = GlobalContext;

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState.user);

  return (
    <Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalContext, GlobalProvider };
