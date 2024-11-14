import { createContext, useContext, useReducer } from "react";

const UIContext = createContext();

const initials = {
  isOpen: false,
  component: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle/modal":
      return {
        ...state,
        isOpen: action.payload.status,
        component: action.payload.component,
      };
  }
}

function UIProvider({ children }) {
  const [{ isOpen, component }, dispatch] = useReducer(reducer, initials);

  function toggleModal({ status, component }) {
    dispatch({
      type: "toggle/modal",
      payload: {
        status,
        component,
      },
    });
  }

  return (
    <UIContext.Provider value={{ isOpen, component, toggleModal }}>
      {children}
    </UIContext.Provider>
  );
}

function useUI() {
  const context = useContext(UIContext);

  return context;
}

export { useUI, UIProvider };
