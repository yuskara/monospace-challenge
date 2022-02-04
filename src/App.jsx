import { Center, ChakraProvider, Container } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { Users } from "./components/users";
import { store } from "./store";
import { theme } from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <Center minH="100vh">
          <Container maxW={1740} px="10px">
            <Users />
          </Container>
        </Center>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
