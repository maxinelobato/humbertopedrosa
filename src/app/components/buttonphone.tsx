'use client';
import { Stack, Icon, IconButton, Link } from '@chakra-ui/react';
import { PhoneCall } from 'phosphor-react';

export function ButtonPhone() {
  return (
    <>
      <Stack
        position="fixed"
        zIndex={999}
        bottom="30px"
        right="20px"
        justifyContent="center"
        alignItems="center"
      >
        <Link
          aria-label="Celular Humberto"
          style={{ textDecoration: 'none' }}
          href="tel:5518991175010"
          isExternal
        >
          <IconButton
            color="whiteAlpha.900"
            aria-label="behavior"
            bgColor="red.500"
            variant="solid"
            w={14}
            h={14}
            shadow="base"
            _hover={{ bg: 'red.600' }}
            _expanded={{ bg: 'red.600' }}
            isRound
          >
            <Icon as={PhoneCall} w={8} h={8} />
          </IconButton>
        </Link>
      </Stack>
    </>
  );
}
