'use client';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Comments } from './comments';
import { Navbar } from './navbar';
import { References } from './references';

export function Home() {
  return (
    <Box
      bgImage={'/img/bgDivorcio.jpg'}
      height={'100%'}
      bgSize={'cover'}
      bgPosition={'center'}
      bgAttachment={'fixed'}
      bgRepeat={'no-repeat'}
    >
      <Box
        bgGradient={'linear(to-l, rgba(23, 25, 35, 0.9), rgba(74, 85, 104, 0.9) 80%)'}
      >
        <Navbar />
        <Stack direction={{ base: 'column', md: 'row' }} pt={[20, 16]}>
          <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack
              spacing={6}
              w={'full'}
              maxW={'lg'}
              textAlign={{ base: 'center', md: 'left' }}
            >
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="whiteAlpha.900">Precisa de um Advogado Especialista</Text>{' '}
                <Text color={'#F7D67B'} as={'span'} textShadow={'#000 1px 1px'}>
                  em Divórcio?
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#F7D67B'}>
                Está pensando em se divorciar e não sabe o que fazer em relação a
                <strong> Pensão</strong>, <strong> Guarda</strong> ou{' '}
                <strong> Partilha de Bens</strong>? Entre em contato com o Dr. Humberto
                que ele irá lhe ouvir e fazer o melhor para lhe ajudar.
              </Text>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt="Perfil"
              w={'full'}
              h={{ base: 'full', md: '50rem' }}
              objectFit="contain"
              loading="lazy"
              src={'/img/humberto.png'}
            />
          </Flex>
        </Stack>
        <References />
        <Comments />
      </Box>
    </Box>
  );
}