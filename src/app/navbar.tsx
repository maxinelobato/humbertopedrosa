import { Box, Flex, Container, Image } from '@chakra-ui/react';

export function Navbar() {
  return (
    <>
      <Box
        zIndex={2}
        w="full"
        pos={'absolute'}
        backdropFilter="auto"
        backdropBlur="1rem"
        bgColor="blackAlpha.400"
      >
        <Container maxW="7xl" p={3}>
          <Flex flex={1} h={16} alignItems="center" justifyContent="center">
            <Flex alignItems="center">
              <Image
                loading="lazy"
                w={'10rem'}
                h={'4rem'}
                src="/humbertologo.png"
                alt="Humberto Logo"
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
