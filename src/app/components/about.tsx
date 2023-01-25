'user client';
import { Box, Container, Flex, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { User } from 'phosphor-react';
import Image from 'next/image';

export function About() {
  return (
    <Container maxW={'7xl'} as={Stack} spacing={12} pb={8}>
      <VStack spacing={4}>
        <Box alignItems="center" display="flex" mt="2" p={5}>
          <User size={36} weight="fill" color="#F7D67B" />
          <Box
            ml="2"
            color="whiteAlpha.800"
            fontSize="2xl"
            textAlign="center"
            fontWeight="bold"
          >
            Conheça o Especialista
          </Box>
        </Box>
      </VStack>
      <Stack minH={'50vh'} direction={{ base: 'column-reverse', md: 'row-reverse' }}>
        <Flex p={4} flex={1} align={'center'} justify={'center'}>
          <Box rounded={'lg'} overflow={'hidden'} shadow={'dark-lg'}>
            <Image
              alt="About Humberto"
              width={400}
              height={300}
              src={'/img/humberto.webp'}
              priority
            />
          </Box>
        </Flex>
        <Flex flex={1} justifyContent="center" align="center" p={'4'}>
          <Box
            p={8}
            backdropFilter="auto"
            backdropBlur="1rem"
            bgColor="blackAlpha.500"
            shadow="lg"
            rounded="lg"
          >
            <Stack
              spacing={6}
              w={'full'}
              maxW={'lg'}
              textAlign={{ base: 'center', md: 'justify' }}
            >
              <Heading fontSize={{ base: 'lg', md: '2xl', lg: '3xl' }}>
                <Text color="whiteAlpha.900">O trabalho do </Text>
                <Text color={'#F7D67B'} textShadow={'#000 1px 1px'}>
                  Dr. Humberto Pedroso
                </Text>{' '}
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#F7D67B'}>
                Se destaca pelo atendimento personalizado, marcado pela ética e pela
                excelência técnica. Oferece soluções jurídicas com estratégias
                processuais diferenciadas para propiciar o desfecho mais satisfatório
                para o cliente, o escritório realiza profunda análise dos casos e
                elabora teses jurídicas de alto nível técnico, sempre amparadas pela
                mais recente doutrina e jurisprudência. O foco é o que o cliente
                precisa, não apenas o que o Direito tem a oferecer. Porém, quando se
                trata de demandas judiciais, buscamos a excelência com bravura.
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}
