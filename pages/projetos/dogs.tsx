import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projeto';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Dogs">
      <Container>
        <Title>
          Dogs <Badge>2021</Badge>
        </Title>
        <P>
          Uma rede social para cachorros. Na aplicação, é possível criar um
          usuário, postar fotos do seu melhor amigo, comentar nas fotos de
          outros no feed e verificar quantos acessos suas publicações tiveram.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.github.com/mauriciotp/dogs" isExternal>
              https://www.github.com/mauriciotp/dogs{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Tecnologias</Meta>
            <span>React JS, CSS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dogs-my-account.png" alt="Dogs" />
        <WorkImage src="/images/works/dogs-send-photo.png" alt="Dogs" />
        <WorkImage src="/images/works/dogs-feed.png" alt="Dogs" />
        <WorkImage src="/images/works/dogs-post.png" alt="Dogs" />
        <WorkImage src="/images/works/dogs-views.png" alt="Dogs" />
      </Container>
    </Layout>
  );
};

export default Work;
