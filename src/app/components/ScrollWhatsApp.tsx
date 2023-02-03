import {
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  AvatarBadge,
  Text,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { WhatsappLogo } from 'phosphor-react';

export function ScrollWhatsApp() {
  return (
    <Stack
      position="fixed"
      zIndex={999}
      bottom="100px"
      right="20px"
      justifyContent="center"
      alignItems="center"
    >
      <Menu colorScheme={'green'}>
        <MenuButton
          as={IconButton}
          color="whiteAlpha.900"
          aria-label="behavior"
          bgColor="green.500"
          variant="solid"
          w={14}
          h={14}
          shadow="base"
          _hover={{ bg: 'green.600' }}
          _expanded={{ bg: 'green.600' }}
          isRound
        >
          <Icon as={WhatsappLogo} w={8} h={8} />
        </MenuButton>
        <MenuList
          backdropFilter="auto"
          backdropBlur="1rem"
          bgColor="blackAlpha.600"
          boxShadow="lg"
          border="1px solid"
          borderColor="whiteAlpha.200"
          rounded="lg"
        >
          <MenuItem
            minH="auto"
            _hover={{
              transition: '0.3s',
              bgColor: 'blackAlpha.600',
            }}
            bgColor="blackAlpha.200"
            boxShadow="lg"
            rounded="lg"
          >
            <Link
              style={{ textDecoration: 'none' }}
              href="https://api.whatsapp.com/send?phone=5518991175010&text=Ol%C3%A1%2C%20Dr.%20Humberto!%20Vim%20pelo%20site.%20Podemos%20conversar%3F%20"
              isExternal
            >
              <Text mr="12px" fontWeight="bold">
                Entre em contato <br /> com o Dr. Humberto
              </Text>
            </Link>
            <Avatar size="lg" name="Humberto Pedrosa" src="/img/humberto.webp">
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
}
