import NextLink from 'next/link';
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Não encontrada</Heading>
      <Text>A página que você está procurando não foi encontrada.</Text>
      <Divider my={6} />

      <Box my={6} textAlign="center">
        <NextLink href="/">
          <Button colorScheme="teal">Retornar para a página inicial</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
