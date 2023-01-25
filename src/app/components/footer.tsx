import { Container, Box, Text, Button, Stack, VStack } from '@chakra-ui/react';
import { AddressBook, At, InstagramLogo, Phone } from 'phosphor-react';

export function Footer() {
  return (
    <Box
      bgImage={'/img/bgImage.webp'}
      bgSize={'contain'}
      bgPos={'left'}
      bgRepeat={'no-repeat'}
    >
      <Box bgGradient="linear(to-l, rgba(23, 25, 35, 0.9), rgba(74, 85, 104, 0.5) 80%)">
        <Container maxW="7xl" justifyContent="center" p={8}>
          <VStack>
            <Box alignItems="center" display="flex" mt="2" p={5}>
              <AddressBook size={36} weight="fill" color="#F7D67B" />
              <Box
                ml="2"
                color="whiteAlpha.800"
                fontSize="2xl"
                textAlign="center"
                fontWeight="bold"
              >
                Quer conhecer o meu trabalho melhor?
              </Box>
            </Box>
          </VStack>
          <Box>
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
              <Box p={[5, 5, 8]} mb={-5}>
                <Stack
                  spacing={3}
                  justifyContent="center"
                  alignItems="center"
                  direction="row"
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
        </Container>
      </Box>
    </Box>
  );
}
