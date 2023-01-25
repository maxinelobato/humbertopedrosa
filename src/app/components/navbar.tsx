import { Box, Flex, Container, Img, HStack, VStack } from '@chakra-ui/react';

export function Navbar() {
  return (
    <>
      <Box w="full" backdropFilter="auto" backdropBlur="1rem" bgColor="blackAlpha.400">
        <VStack p={3} alignContent={'center'}>
          <Img w={'10rem'} h={'4rem'} src="/humbertologo.png" alt="Humberto Logo" />
        </VStack>
      </Box>
    </>
  );
}
