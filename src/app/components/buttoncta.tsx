'use client';
import { Button, Link } from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function ButtonCta() {
  return (
    <Button
      as={Link}
      colorScheme="green"
      backdropFilter="auto"
      backdropBlur="8px"
      shadow="lg"
      size="lg"
      rounded={'full'}
      _hover={{
        bgColor: 'green.600',
        color: 'whiteAlpha.900',
        transform: 'scale(1.1)',
      }}
      leftIcon={<WhatsappLogo size={24} weight="fill" />}
      style={{ textDecoration: 'none' }}
      href="https://api.whatsapp.com/send?phone=5518991175010&text=Ol%C3%A1%2C%20Dr.%20Humberto!%20Vim%20pelo%20site%20de%20Divórcio.%20Podemos%20conversar%3F%20"
      isExternal
    >
      Fale com o Humberto
    </Button>
  );
}
