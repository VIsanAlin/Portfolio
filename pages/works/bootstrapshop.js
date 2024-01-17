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
    <Layout title="Bootstrap Shop">
      <Container
        maxW={{ base: 'container.md', md: 'container.lg', lg: 'container.xl' }}
      >
        <Title>
          Makeup Shop <Badge> Link Academy 2023</Badge>
        </Title>
        <P>
          Welcome to our feature-rich website! We offer a wide range of
          products, including mascara, bronzer, blush, and foundation, all
          available for purchase in our online shop. Additionally, we have a
          delightful selection of fresh fruit products to cater to your diverse
          needs.
        </P>
        <P>
          Explore our website and discover the perfect makeup products and fresh
          fruit items that suit your preferences. Enjoy the convenience of
          browsing, adding to cart, and seamless checkout. We look forward to
          providing you with an enjoyable and hassle-free shopping experience.
        </P>

        <List ml={4} my={4}>
          <ListItem my={4}>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/BootstrapShop">
              https://github.com/VIsanAlin/BootstrapShop{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem my={4}>
            <Meta>Implemented Features</Meta>
            <br />
            <span>Fetch data from external API and display them</span>
            <br />
            <span>
              Allows users to add products to their cart and view their cart
            </span>
            <br />
            <span>Uses Bootstrap for responsive design and layout</span>
            <br />
            <span>
              Uses Gulp for task automation, SASS compilation, mini CSS &
              JavaScript
            </span>
          </ListItem>
          <ListItem my={4}>
            <Meta>Stack</Meta>
            <span>HTML/CSS/Javascript/jQuery/Bootstrap/Gulp</span>
          </ListItem>
        </List>
        <SimpleGrid columns={[1, 1, 1, 2]} gap={6}>
          <Section>
            <WorkImage
              src="/images/projects/thumbnailBootstrapShop.png"
              alt="BootstrapShop"
            />
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Work
