import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="SpaceTourism">
      <Container>
        <Title>
          Space Tourism <Badge>2023</Badge>
        </Title>
        <P>
          A Website for travelling to some destinations in space. We have a home
          page, destionations with how long the trip is, the crew and some
          technologies used to make it possible
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/VIsanAlin/SpaceTourism">
              https://github.com/VIsanAlin/SpaceTourism{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/Tailwind/Typescript</span>
          </ListItem>
        </List>
        <WorkImage src="/images/thumbnailSpaceTourism.png" alt="SpaceTourism" />
      </Container>
    </Layout>
  )
}

export default Work
