'user client';
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Baby, ForkKnife, NotePencil, Package, Scales } from 'phosphor-react';
import { ButtonCta } from './buttoncta';
import { ButtonPhone } from './buttonphone';

export function References() {
  return (
    <Container maxW={'6xl'}>
      <Stack spacing={{ base: 8, md: 14 }} align={'center'} direction={'column'}>
        <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} textAlign={'center'}>
          <Text color="whiteAlpha.900">Soluções para o seu </Text>{' '}
          <Text color={'#F7D67B'} as={'span'} textShadow={'#000 1px 1px'}>
            Divórcio
          </Text>{' '}
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#F7D67B'}>
            Iremos identificar como foi feito o seu Divórcio
          </Text>
        </Heading>
        <Box
          p={2}
          backdropFilter="auto"
          backdropBlur="1rem"
          bgColor="whiteAlpha.50"
          shadow="lg"
          rounded="lg"
        >
          <Flex
            justifyContent={{ base: 'center', md: 'center' }}
            direction={{ base: 'column-reverse', md: 'column' }}
          >
            <Container maxW={'6xl'}>
              <SimpleGrid columns={{ base: 1, md: 4 }} spacing={[2, 6]}>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Scales size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Divórcio Judicial</Text>
                        <Text color="#F7D67B" as="span">
                          Obrigatório quando há filhos menores, incapazes ou gravidez.
                          Pode ser consensual ou litigioso.
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Scales size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Divórcio Extrajudicial</Text>
                        <Text color="#F7D67B" as="span">
                          Divórcio feito em cartório. Precisa ser consensual e não haver
                          filhos menores, incapazes ou gravidez.
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Scales size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Dissolução de União Estável</Text>
                        <Text color="#F7D67B" as="span">
                          Equivale ao divórcio. Também pode ser judicial ou
                          extrajudicial, consensual ou litigioso.
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Scales size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'start'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Divórcio no Exterior</Text>
                        <Text color="#F7D67B" as="span">
                          Divórcio realizado em outro país e que precisa ser reconhecido
                          no Brasil para ter validade.
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
        <Heading
          fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}
          textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          maxW="4xl"
        >
          Quais soluções podemos resolver com o seu Divórcio
        </Heading>
        <Box
          p={2}
          backdropFilter="auto"
          backdropBlur="1rem"
          bgColor="whiteAlpha.50"
          shadow="lg"
          rounded="lg"
        >
          <Flex
            justifyContent={{ base: 'center', md: 'center' }}
            direction={{ base: 'column-reverse', md: 'column' }}
          >
            <Container maxW={'6xl'}>
              <SimpleGrid columns={{ base: 4, md: 4 }} spacing={6}>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <ForkKnife size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Pensão</Text>
                        <Text color="#F7D67B" as="span">
                          Alimentícia
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Baby size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Guarda dos</Text>
                        <Text color="#F7D67B" as="span">
                          Filhos
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <Package size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'center'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Partilha de</Text>
                        <Text color="#F7D67B" as="span">
                          Bens
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
                <VStack align={'center'} py={5}>
                  <Box color={'#F7D67B'} px={2}>
                    <NotePencil size={'4em'} weight="fill" />
                  </Box>
                  <VStack align={'start'}>
                    <Box>
                      <Heading
                        fontSize={{ base: 'sm', md: 'lg' }}
                        textAlign={{ base: 'center', md: 'center', lg: 'center' }}
                      >
                        <Text>Mudança de</Text>
                        <Text color="#F7D67B" as="span">
                          Nome
                        </Text>
                      </Heading>
                    </Box>
                  </VStack>
                </VStack>
              </SimpleGrid>
            </Container>
          </Flex>
        </Box>
        <Stack spacing={{ base: 4, md: 6 }} direction={{ base: 'column', sm: 'row' }}>
          <ButtonCta />
          <ButtonPhone />
        </Stack>
      </Stack>
    </Container>
  );
}
