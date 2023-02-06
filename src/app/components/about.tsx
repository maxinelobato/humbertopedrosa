'user client';
import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';

export function About() {
  return (
    <Container maxW={'7xl'} as={Stack} pb={8}>
      <Stack direction={{ base: 'column', md: 'row-reverse' }}>
        <Flex p={4} flex={1} align={'center'} justify={'center'}>
          <Box rounded={'lg'} overflow={'hidden'} shadow={'base'}>
            <Image
              alt="About Humberto"
              width={400}
              height={300}
              src={'/img/humberto.webp'}
            />
          </Box>
        </Flex>
        <Flex flex={1} justifyContent="center" align="center" p={'4'}>
          <Box p={6}>
            <Stack
              spacing={6}
              w={'full'}
              maxW={'lg'}
              textAlign={{ base: 'center', md: 'justify' }}
            >
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                <Text color="whiteAlpha.900">Conheça o trabalho do</Text>{' '}
                <Text color={'#F7D67B'} as={'span'} textShadow={'#000 1px 1px'}>
                  Dr. Humberto
                </Text>
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
