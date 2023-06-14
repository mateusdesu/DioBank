import { Box, ChakraProvider, Heading } from "@chakra-ui/react";

export const Header = () => {
    return(
       <ChakraProvider>
        <Box bg="#B0D7FF" minWidth="100%" p="4">
          <Heading as="h1" size="lg" color="#2D3142" fontWeight="bold">
            Dio Bank
          </Heading>
        </Box>
        </ChakraProvider>
    )
}