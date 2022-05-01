import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Navbar from '../navbar';
import { Router } from 'next/router';

type MainProps = {
  children: ReactNode;
  router: Router;
};

const Main = ({ children, router }: MainProps) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maurício Pinto | Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={20}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
