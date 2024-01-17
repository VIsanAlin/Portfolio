import {
  Container,
  Badge,
  Link,
  List,
  SimpleGrid,
  ListItem
} from '@chakra-ui/react'
import Section from '../../components/section'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="ShowcaseCraft">
      <Container
        maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
      >
        <Title>
          ShowcaseCraft <Badge>2024</Badge>
        </Title>
        <P>
          This project is a full-stack web application built with Angular and
          Express.js, showcasing Create, Read, Update, and Delete (CRUD)
          operations. The application is designed to manage a list of tasks,
          providing a user-friendly interface for adding, modifying, and
          deleting tasks.
        </P>
        <List ml={4} my={4}>
          <ListItem my={4}>
            <Meta>Website</Meta>
            <Link href="https://github.com/VIsanAlin/ShowcaseCraft">
              https://github.com/VIsanAlin/ShowcaseCraft{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>Angular/CSS/JavaScript/Express/Node/JSON Server/Multer</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailShowcaseCraft.png"
              alt="ShowcaseCraft"
            />
          </Section>
          <Section>
            <WorkImage
              src="/images/projects/ShowcaseCraftV2.png"
              alt="ShowcaseCraft"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
