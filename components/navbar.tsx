import Logo from './logo';
import NextLink from 'next/link';
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';
import ThemeToggleButton from '../components/theme-toggle-button';

type NavbarProps = {
  path: string;
};

type LinkItemProps = {
  href: string;
  path: string;
  children: ReactNode;
};

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const active = path === href;
  const inactiveColor = useColorModeValue('gray-200', 'whiteAlpha.900');

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props: NavbarProps) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/projetos" path={path}>
            Projetos
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>Sobre</MenuItem>
                </NextLink>
                <NextLink href="/projetos" passHref>
                  <MenuItem as={Link}>Projetos</MenuItem>
                </NextLink>
                <NextLink href="https://github.com/mauriciotp" passHref>
                  <MenuItem as={Link}>Ver fonte</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
