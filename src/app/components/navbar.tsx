import { Box, Flex, Container, Img } from '@chakra-ui/react';

export function Navbar() {
  return (
    <>
      <Box w="full" backdropFilter="auto" backdropBlur="1rem" bgColor="blackAlpha.400">
        <Container maxW="7xl" p={3}>
          <Flex flex={1} h={16} alignItems="center" justifyContent="center">
            <Flex alignItems="center">
              <Img w={'10rem'} h={'4rem'} src="/humbertologo.png" alt="Humberto Logo" />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
