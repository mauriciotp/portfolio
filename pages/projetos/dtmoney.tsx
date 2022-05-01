import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/projeto';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => {
  return (
    <Layout title="Dtmoney">
      <Container>
        <Title>
          Dtmoney <Badge>2022</Badge>
        </Title>
        <P>
          Uma Aplicação de finanças onde é possível adicionar gastos ou ganhos
          por categoria com valores definidos pelo usuário. Uma fake API
          utilizando Mirage JS foi utilizada para inserir as transações.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/mauriciotp/my-dtmoney" isExternal>
              https://github.com/mauriciotp/my-dtmoney{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Plataforma</Meta>
            <span>Browser</span>
          </ListItem>
          <ListItem>
            <Meta>Tecnologias</Meta>
            <span>React JS, SASS, Mirage JS</span>
          </ListItem>
        </List>

        <WorkImage src="/images/works/dtmoney-insert.png" alt="Dtmoney" />
        <WorkImage src="/images/works/dtmoney-list.png" alt="Dtmoney" />
      </Container>
    </Layout>
  );
};

export default Work;
