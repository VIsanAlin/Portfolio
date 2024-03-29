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
    <Layout title="News Homepage">
      <Container
        maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
      >
        <Title>
          News Homepage <Badge>2023</Badge>
        </Title>
        <P>
          This news homepage is meticulously designed using HTML and CSS, with a
          focus on delivering an exceptional user experience across different
          devices, particularly mobile and desktop displays. By implementing
          responsive design techniques, the layout and content seamlessly adapt
          to varying screen sizes, ensuring optimal readability and navigation
          for users. The homepage presents a carefully curated selection of news
          articles, accompanied by captivating images and concise summaries to
          capture readers' attention. With its intuitive and user-friendly
          interface, visitors can effortlessly explore the latest news stories,
          access additional details with a single click, and stay informed on
          various topics of interest.
        </P>

        <List ml={4} my={4}>
          <ListItem my={4}>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/NewsHomepage/tree/main/news-homepage-main">
              https://github.com/VIsanAlin/NewsHomepage/tree/main/news-homepage-main{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Platform</Meta>
            <span>Mobile/Display</span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>HTML/CSS</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailNewsHomepage.jpg"
              alt="News Homepage"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
