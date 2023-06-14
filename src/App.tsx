import { ChakraProvider, Box } from "@chakra-ui/react";

import { LoginCard } from "./components/LoginCard";
import { Header } from "./components/Header";

function App() {
  return (
    <ChakraProvider>
       <Box bg="#EAE8FF" height="100vh">
        <Header/>
      <LoginCard />
      </Box>
    </ChakraProvider>
  )
}

export default App;
