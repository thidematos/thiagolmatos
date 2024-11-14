import { createContext, useContext, useReducer } from "react";

const UIContext = createContext();

const initials = {
  isOpen: false,
  component: null,
  isDesktop: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle/modal":
      return {
        ...state,
        isOpen: action.payload.status,
        component: action.payload.component,
      };
    case "resize/window":
      return {
        ...state,
        isDesktop: action.payload,
      };
  }
}

function UIProvider({ children }) {
  const [{ isOpen, component, isDesktop }, dispatch] = useReducer(
    reducer,
    initials,
  );

  function toggleModal({ status, component }) {
    dispatch({
      type: "toggle/modal",
      payload: {
        status,
        component,
      },
    });
  }

  function resizeWindow(isDesktop) {
    dispatch({ type: "resize/window", payload: isDesktop });
  }

  return (
    <UIContext.Provider
      value={{ isOpen, component, toggleModal, isDesktop, resizeWindow }}
    >
      {children}
    </UIContext.Provider>
  );
}

function useUI() {
  const context = useContext(UIContext);

  return context;
}

export { useUI, UIProvider };
