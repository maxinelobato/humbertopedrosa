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
  IconButton,
} from '@chakra-ui/react';
import { ArrowCircleLeft, ArrowCircleRight, Heart, Quotes, Star } from 'phosphor-react';
import Slider from 'react-slick';

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

const TestimonialAvatar = ({ src, name }: { src: string; name: string }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar loading="lazy" size="lg" src={src} mb={2}></Avatar>
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
      </Stack>
    </Flex>
  );
};

const ReviewsGoogle = {
  rating: 5,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: true,
  slidesToScroll: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

export function Comments() {
  const [slider, setSlider] = React.useState<Slider | null>(null);
  const top = '30%';
  const side = '0%';

  return (
    <>
      <Container maxW={'6xl'} py={16} as={Stack} spacing={12}>
        <VStack spacing={4}>
          <Box
            backdropFilter="auto"
            backdropBlur="1rem"
            shadow="2xl"
            alignItems="center"
            display="flex"
            mt="2"
            p={5}
            rounded={'lg'}
          >
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
        <Stack
          direction={{ base: 'column', md: 'column' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Box position={'relative'} overflow={'hidden'}>
            {/* CSS files for react-slick */}
            <link
              rel="stylesheet"
              type="text/css"
              charSet="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
              aria-label="left-arrow"
              variant="ghost"
              position="absolute"
              left={side}
              top={top}
              transform={'translate(0%, -50%)'}
              zIndex={2}
              onClick={() => slider?.slickPrev()}
            >
              <ArrowCircleLeft size={36} weight="fill" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
              aria-label="right-arrow"
              variant="ghost"
              position="absolute"
              right={side}
              top={top}
              transform={'translate(0%, -50%)'}
              zIndex={2}
              onClick={() => slider?.slickNext()}
            >
              <ArrowCircleRight size={36} weight="fill" />
            </IconButton>
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
              <Box p={4}>
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
                      <TestimonialText>Ótimo atendimento</TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar src={''} name={'Nilza Silva'} />
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
                      <TestimonialText>Advogado de excelência!</TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar src={''} name={'Rosangela Rocha Alves'} />
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
                        Super indico. Problema solucionado!
                      </TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar src={''} name={'Edileia Lopes'} />
                  </Testimonial>
                </SimpleGrid>
              </Box>
              <Box p={4}>
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
                    <TestimonialAvatar src={''} name={'Renan Araujo Films'} />
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
                        Muito bom atendimento diferenciado um excelente profissional
                        amei
                      </TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar src={''} name={'Gi Gospel'} />
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
                        Ficamos muito satisfeitos com a prestação de serviços do
                        Humberto, foi tudo muito ágil e com contato facilitado. Correu
                        tudo bem com a realização da nossa diligência. Obrigada!
                      </TestimonialText>
                    </TestimonialContent>
                    <TestimonialAvatar src={''} name={'Ellen Florisbal'} />
                  </Testimonial>
                </SimpleGrid>
              </Box>
            </Slider>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
