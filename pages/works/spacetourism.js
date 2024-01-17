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
          Space Tourism <Badge>2023</Badge>
        </Title>
        <P>
          Embark on a celestial journey like no other with our Space Tourism
          website. Experience the wonders of outer space and indulge in the
          thrill of interstellar exploration. Our website offers a captivating
          platform for space enthusiasts, adventurers, and dreamers alike,
          providing a gateway to discover and learn about the vast mysteries of
          the universe. Immerse yourself in breathtaking imagery, informative
          articles, and interactive features that showcase the wonders of
          distant planets, cosmic phenomena, and future space travel endeavors.
          Whether you're seeking inspiration, expanding your knowledge, or
          simply yearning for an out-of-this-world experience, our Space Tourism
          website invites you to embark on an extraordinary voyage that
          transcends the boundaries of Earth and ignites the imagination.
        </P>
        <List ml={4} my={4}>
          <ListItem my={4}>
            <Meta>Website</Meta>
            <Link href="https://github.com/VIsanAlin/SpaceTourism">
              https://github.com/VIsanAlin/SpaceTourism{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>React/Tailwind/Typescript</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailSpaceTourism.png"
              alt="SpaceTourism"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
