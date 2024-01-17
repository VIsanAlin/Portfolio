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
    <Layout title="Multi-step Form">
      <Container
        maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
      >
        <Title>
          Multi-step Form <Badge>2023</Badge>
        </Title>
        <P>
          This multi-step form project offers users a seamless way to input
          information through a series of pages. It serves as a valuable
          learning experience in HTML, CSS, and JavaScript, enabling the
          creation of a responsive form that functions seamlessly on various
          devices. By leveraging technologies such as HTML, CSS, JavaScript, and
          LocalStorage, this project ensures a smooth user experience and allows
          for the storage and retrieval of user input data. With features like
          media queries for responsive design, a progress bar, and the display
          of total cost at the final step, this project showcases the
          implementation of key functionalities. While there are a few ongoing
          issues with LocalStorage, the project continues to be refined and
          improved to deliver an optimal user experience.
        </P>

        <List ml={4} my={4}>
          <ListItem my={4}>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/MultiStepForm">
              https://github.com/VIsanAlin/MultiStepForm{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>HTML/CSS/Javascript/LocalStorage</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailMultiForm.png"
              alt="Multi-Step Form"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
