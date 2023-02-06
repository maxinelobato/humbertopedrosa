import { Button, Link } from '@chakra-ui/react';
import { PhoneCall } from 'phosphor-react';

export function ButtonPhone() {
  return (
    <Button
      colorScheme="red"
      backdropFilter="auto"
      backdropBlur="8px"
      shadow="lg"
      size="lg"
      rounded={'full'}
      _hover={{
        bgColor: 'red.400',
        color: 'whiteAlpha.900',
        transform: 'scale(1.1)',
      }}
      leftIcon={<PhoneCall size={24} weight="fill" />}
    >
      <Link style={{ textDecoration: 'none' }} href="tel:5518991175010" isExternal>
        Ligue para o Humberto
      </Link>
    </Button>
  );
}
