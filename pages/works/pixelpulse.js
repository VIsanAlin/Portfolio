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
    <Layout title="SpaceTourism">
      <Container
        maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
      >
        <Title>
          PixelPulse <Badge>2023</Badge>
        </Title>
        <P>
          This web application is designed as an online game store, allowing
          users to browse, search, and purchase video games. It is built using
          React, Next.js, and MongoDB Realm for the backend. This project
          leverages a modern web development stack to create an interactive and
          user-friendly online game store. Users can explore and purchase games
          based on their preferences, making it a comprehensive solution for
          gamers.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://gaming-platform-tawny.vercel.app">
              PixelPulseLink <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>React/Tailwind/Next.js/MongoDB</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailPixelPulse.png"
              alt="PixelPulse"
            />
          </Section>
          <Section>
            <WorkImage
              src="/images/projects/PixelPulseV2.png"
              alt="PixelPulse"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
