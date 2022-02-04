import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div>
          Vite app
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
