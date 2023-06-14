import { ChakraProvider, Button } from "@chakra-ui/react";

interface IButton {
  event: () => void;
}

export const LoginButton = ({ event }: IButton) => {
  return (
    <ChakraProvider>
      <Button
        width="100%"
        mt="4"
        bg="#2D3142"
        color="#EAE8FF"
        onClick={event}
        _hover={{ color: "#2D3142", bg: "#ADACB5" }}
      >
        Login
      </Button>
    </ChakraProvider>
  );
};
