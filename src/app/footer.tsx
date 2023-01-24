import {
  Container,
  Box,
  Text,
  IconButton,
  Button,
  Link,
  Stack,
  VStack,
} from '@chakra-ui/react';
import { AddressBook, At, InstagramLogo, LinkedinLogo, Phone } from 'phosphor-react';

export function Footer() {
  return (
    <Box bgGradient="linear(to-r, gray.900, gray.400 80%)">
      <Container maxW="7xl" justifyContent="center" p={8}>
        <VStack>
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
            Quer falar diretamente comigo?
          </Text>
          <Box py={{ base: 5, sm: 5, md: 8, lg: 8 }}>
            <Stack
              spacing={3}
              justifyContent="center"
              alignItems="center"
              direction={['column', 'column', 'row']}
            >
              <Button
                as={Link}
                shadow="lg"
                size="md"
                height="48px"
                width="200px"
                variant="solid"
                color="#DCE2FF"
                _hover={{ bgColor: 'rgba(247, 214, 123, 0.5)', transition: '0.5s' }}
                leftIcon={<Phone color="#fff" size="20px" />}
                href="tel:+5518991175010"
                style={{ textDecoration: 'none' }}
                isExternal
              >
                (18) 99117-5010
              </Button>
              <Button
                as={Link}
                shadow="lg"
                size="md"
                height="48px"
                width="280px"
                variant="solid"
                color="#DCE2FF"
                _hover={{ bgColor: 'rgba(247, 214, 123, 0.5)', transition: '0.5s' }}
                leftIcon={<At color="#fff" size="20px" />}
                href="mailto:adv.pedrosapv@gmail.com"
                style={{ textDecoration: 'none' }}
                isExternal
              >
                adv.pedrosapv@gmail.com
              </Button>
            </Stack>
          </Box>
          <Box>
            <Text textAlign="center" fontWeight="bold" color="#F7D67B">
              Siga as minhas redes sociais.
            </Text>
            <Box p={[5, 5, 8]} mb={-5}>
              <Stack
                spacing={3}
                justifyContent="center"
                alignItems="center"
                direction="row"
              >
                <IconButton
                  as={Link}
                  shadow="lg"
                  aria-label="facebook"
                  variant="solid"
                  size="lg"
                  w={12}
                  h={12}
                  _hover={{ bgColor: 'rgba(247, 214, 123, 0.5)', transition: '0.5s' }}
                  icon={<InstagramLogo size={24} />}
                  href="https://www.instagram.com/mayanasilva_adv/"
                  style={{ textDecoration: 'none' }}
                  isExternal
                />
                <IconButton
                  as={Link}
                  shadow="lg"
                  aria-label="linkedin"
                  size="lg"
                  w={12}
                  h={12}
                  _hover={{ bgColor: 'rgba(247, 214, 123, 0.5)', transition: '0.5s' }}
                  icon={<LinkedinLogo size={24} />}
                  href="https://www.linkedin.com/in/mayana-silva-628460216"
                  style={{ textDecoration: 'none' }}
                  isExternal
                />
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
  );
}
