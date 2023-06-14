import { ChakraProvider,Box,Heading,Input,Center} from "@chakra-ui/react";
import { LoginButton } from "../LoginButton";
import { welcome } from "../../services/welcome";

export const LoginCard = () => {
    return (
        <ChakraProvider>
          <Center>
            <Box
              bg="#B0D7FF"
              minWidth="60%"
              maxWidth="60%"
              p="4"
              mt="8"
              borderRadius="lg"
              border="1px solid #2D3142"
            >
              <Center>
                <Heading as="h2" color="#2D3142">
                  Login
                </Heading>
              </Center>
  
              <Input placeholder="Email" variant="filled" mt="2" />
              <Input
                placeholder="Password"
                type="password"
                variant="filled"
                mt="2"
              />
              <LoginButton event={welcome}/>
            </Box>
          </Center>
      </ChakraProvider>
    );
}