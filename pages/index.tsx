import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  useColorModeValue,
  SimpleGrid,
  List,
  ListItem,
  Link,
  Icon,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
        >
          Olá, sou um desenvolvedor web front-end!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Maurício Pinto
            </Heading>
            <p>Densenvolvedor / Estudante</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/eu.jpg"
              alt="Imagem de perfil"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Trabalho
          </Heading>
          <Paragraph>
            Maurício é um desenvolvedor front-end que mora no Brasil com uma
            grande paixão em aprender. Ele tem uma enorme aptidão em resolver
            problemas da vida real com código. Quando não está programando, ele
            ama sair com os amigos e tomar um café para relaxar. Atualmente, ele
            procura aprimorar seus conhecimentos desenvolvendo novas aplicações.
          </Paragraph>

          <Box textAlign="center" mt={4}>
            <NextLink href="/projetos">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Meu portfólio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Nasceu em Belém, Brasil.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Começou a estudar Engenharia da Computação pela Universidade Federal
            do Pará.
          </BioSection>
          <BioSection>
            <BioYear>2022 - atualmente</BioYear>
            Quer se formar e ser um grande desenvolvedor.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Eu ♥
          </Heading>
          <Paragraph>
            Música, jogar videogame, tocar violão, tomar café e brincar com meu
            cachorro.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Redes sociais
          </Heading>

          <List>
            <ListItem>
              <Link href="https://github.com/mauriciotp" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @mauriciotp
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/mauriciotp" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @mauriciotp
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Home;
