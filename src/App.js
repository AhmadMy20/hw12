import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store";
import Board from "./board";

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <div className='App'>
          <Board />
        </div>
      </ChakraProvider>
    </Provider>
  );
}

export default App;
