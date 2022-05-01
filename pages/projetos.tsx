import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';
import podcastr from '../public/images/works/podcastr.png';
import dtmoney from '../public/images/works/dtmoney.png';
import dogs from '../public/images/works/dogs.png';
import Layout from '../components/layouts/article';

const Works = () => {
  return (
    <Layout title="Projetos">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projetos
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id="podcastr" title="Podcastr" thumbnail={podcastr}>
              Um podcast sobre tecnologia
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="dogs" title="Dogs" thumbnail={dogs}>
              Rede social para cachorros
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="dtmoney" title="Dtmoney" thumbnail={dtmoney}>
              Aplicação de finanças
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
