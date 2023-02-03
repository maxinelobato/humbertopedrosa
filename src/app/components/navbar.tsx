import { Box, VStack } from '@chakra-ui/react';
import Image from 'next/image';

export function Navbar() {
  return (
    <>
      <Box
        w="full"
        h={20}
        backdropFilter="auto"
        backdropBlur="1rem"
        bgColor="blackAlpha.400"
        boxShadow="lg"
      >
        <VStack p={3} alignContent={'center'}>
          <Image
            width={150}
            height={150}
            src="/humbertologo.webp"
            alt="Humberto Logo"
            priority
          />
        </VStack>
      </Box>
    </>
  );
}
