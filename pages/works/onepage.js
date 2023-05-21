import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="One Page">
      <Container>
        <Title>
          One Page <Badge> Link Academy 2022</Badge>
        </Title>
        <P>
          Welcome to our One Page Website! This showcase highlights our
          expertise in HTML, CSS, SCSS, JavaScript, Bootstrap, and Gulp. With
          HTML as the backbone, we have structured our content to deliver an
          immersive user experience. Our CSS styles have been crafted using
          modern techniques, ensuring optimal performance and maintainability.
          Leveraging SCSS, we have enhanced our stylesheets with modularity and
          organization.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/onepage">
              https://github.com/VIsanAlin/onepage <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Implemented Sections</Meta>
            <span>
              Hero / About / Services / Portfolio / Testimonials / Contact /
              Footer
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS/SCSS/Javascript/Bootstrap/Gulp</span>
          </ListItem>
        </List>
        <WorkImage src="/images/projects/thumbnailOnepage.png" alt="Store" />
      </Container>
    </Layout>
  )
}

export default Work
