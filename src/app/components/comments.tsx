'use client';
import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  VStack,
  SimpleGrid,
} from '@chakra-ui/react';
import { Heart, Quotes, Star } from 'phosphor-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation } from 'swiper';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      backdropFilter="auto"
      backdropBlur="1rem"
      bgColor="blackAlpha.500"
      rounded="lg"
      boxShadow="base"
      p={8}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: 'blackAlpha.500',
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text textAlign={'center'} color="whiteAlpha.900" fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ name }: { name: string }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar loading="lazy" size="lg" name={name} mb={2}></Avatar>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

const ReviewsGoogle = {
  rating: 5,
};

export function Comments() {
  return (
    <>
      <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
        <VStack spacing={4}>
          <Box alignItems="center" display="flex" mt="2" p={5}>
            <Heart size={36} weight="fill" color="#F7D67B" />
            <Box
              ml="2"
              color="whiteAlpha.800"
              fontSize="2xl"
              textAlign="center"
              fontWeight="bold"
            >
              Avaliações dos Clientes
            </Box>
          </Box>
        </VStack>
        <Stack spacing={0} align={'center'}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
            textAlign={{ base: 'center', md: 'center', lg: 'center' }}
          >
            <Text color="whiteAlpha.800">Nosso atendimento e excelência</Text>{' '}
            <Text color="#F7D67B" as="span" textShadow="#000 1px 1px">
              sendo reconhecido no Google Review
            </Text>{' '}
          </Heading>
        </Stack>
      </Container>
      <Container maxW={'4xl'} pb={8}>
        <Stack direction={'column'} spacing={{ base: 10, md: 4, lg: 10 }}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>
                  Super recomendo, Atendimento maravilhoso...Agradeço muito pela atenção
                  q o Dr Humberto teve comigo!!!
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Loana Ferreira'} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>
                  Ótimo atendimento, fui muito bem atendida. Recomendo !
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Renata Leme'} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>Super indico. Problema solucionado!</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Edileia Lopes'} />
            </Testimonial>
          </SimpleGrid>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>
                  Excelência e qualidade no atendimento , recomendo sem duvidas.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Renan Araujo Films'} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>
                  Muito bom atendimento diferenciado um excelente profissional amei
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Gi Gospel'} />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <Quotes size={28} weight="fill" />
                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <Star
                        weight="fill"
                        key={i}
                        color={i < ReviewsGoogle.rating ? '#FBBC04' : 'gray'}
                      />
                    ))}
                </Box>
                <TestimonialText>
                  Ficamos muito satisfeitos com a prestação de serviços do Humberto, foi
                  tudo muito ágil e com contato facilitado. Correu tudo bem com a
                  realização da nossa diligência. Obrigada!
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar name={'Ellen Florisbal'} />
            </Testimonial>
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  );
}
