import { createContext, useReducer } from "react";
import reducer from "./reducer";

export const EmojiContext = createContext();

const initialState = {
  emoji: {}
};

export default function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EmojiContext.Provider value={[state, dispatch]}>
      {props.children}
    </EmojiContext.Provider>
  );
}
