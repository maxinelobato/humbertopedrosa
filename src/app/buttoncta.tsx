import { Button, Link, Stack } from '@chakra-ui/react';

export function ButtonCta() {
  return (
    <Stack direction={'column'} align={'center'} position={'relative'}>
      <Button
        colorScheme="yellow"
        backdropFilter="auto"
        backdropBlur="8px"
        shadow="lg"
        size="lg"
        rounded={'full'}
        _hover={{
          bgColor: 'yellow.400',
          color: 'yellow.900',
          transform: 'scale(1.1)',
        }}
      >
        <Link
          style={{ textDecoration: 'none' }}
          href="https://api.whatsapp.com/send?phone=5598981258283&text=Ol%C3%A1%2C%20Dr%C2%AA.%20Mayana!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
          isExternal
        >
          Fale com o Humberto
        </Link>
      </Button>
    </Stack>
  );
}
