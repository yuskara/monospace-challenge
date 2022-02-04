import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Users } from "./components/users";
import { store } from "./store";

function App() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <div>
          <Users />
        </div>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
