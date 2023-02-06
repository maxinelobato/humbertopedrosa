'use client';
import { Box, Text, Button, Stack, Image, Heading, Flex } from '@chakra-ui/react';
import { At, InstagramLogo, Phone } from 'phosphor-react';

export function Footer() {
  return (
    <Box bgGradient="linear(to-l, rgba(23, 25, 35, 0.9), rgba(74, 85, 104, 0.5) 100%)">
      <Stack direction={{ base: 'column', md: 'row-reverse' }}>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/img/bgEscritorio.webp'}
          />
        </Flex>
        <Flex flex={1} justifyContent="center" align="center" p={'4'}>
          <Box>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              textAlign={'center'}
            >
              <Text color="whiteAlpha.900">Me acompanhe nas redes sociais e</Text>{' '}
              <Text color={'#F7D67B'} as={'span'} textShadow={'#000 1px 1px'}>
                conheça melhor o meu Trabalho
              </Text>
            </Heading>
            <Text mt={[3, 3, 5]} fontWeight="bold" textAlign="center" color="#F7D67B">
              Fale diretamente comigo
            </Text>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
              <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                direction={['column', 'column', 'row']}
              >
                <Button
                  leftIcon={<Phone size={24} />}
                  shadow="lg"
                  variant="outline"
                  size="lg"
                  style={{ textDecoration: 'none', pointerEvents: 'none' }}
                >
                  (18) 99117-5010
                </Button>
                <Button
                  leftIcon={<At size={24} />}
                  shadow="lg"
                  variant="outline"
                  size="lg"
                  style={{ textDecoration: 'none', pointerEvents: 'none' }}
                >
                  adv.pedrosapv@gmail.com
                </Button>
              </Stack>
            </Box>
            <Box>
              <Text textAlign="center" fontWeight="bold" color="#F7D67B">
                Siga o meu Instagram
              </Text>
              <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
                <Stack
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  direction={['column', 'column', 'row']}
                >
                  <Button
                    leftIcon={<InstagramLogo size={24} />}
                    shadow="lg"
                    variant="outline"
                    size="lg"
                    style={{ textDecoration: 'none', pointerEvents: 'none' }}
                  >
                    @humbertopedrosa.adv
                  </Button>
                </Stack>
              </Box>
            </Box>
            <Box>
              <Text textAlign="center" fontWeight="bold" color="#F7D67B" mt={5}>
                Advogado Dr. Humberto Pedrosa | OAB/SP - 439.777
              </Text>
            </Box>
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
}
