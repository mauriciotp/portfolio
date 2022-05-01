import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projeto';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Podcastr">
      <Container>
        <Title>
          Podcastr <Badge>2022</Badge>
        </Title>
        <P>
          Um podcast sobre tecnologia. O projeto foi desenvolvido usando Static
          Site Regeneration para uma melhor performance em larga escala. Possui
          funções de modo aleatório, repetir o episódio atual, pular para o
          próximo e voltar para o anterior. Os dados da aplicação foram
          consumidos utilizando uma fake API com json server.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="#">
              https://link.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Tecnologias</Meta>
            <span>React JS, Next.js, SASS, json server</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/podcastr-all-ep.png" alt="Podcastr" />
        <WorkImage src="/images/works/podcastr-one-ep.png" alt="Podcastr" />
      </Container>
    </Layout>
  );
};

export default Work;
