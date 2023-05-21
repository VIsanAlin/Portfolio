import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Store">
      <Container>
        <Title>
          Furniture Store <Badge> Link Academy 2022</Badge>
        </Title>
        <P>
          Welcome to our Furniture Store! Discover a carefully curated
          collection of furniture items in our small yet charming store. With
          our intuitive search functionality, customers can effortlessly find
          their desired pieces based on the name, company, or price. Once you've
          found a furniture item that catches your eye, delve into its
          additional details page, where you can explore more about its unique
          features and specifications. Finally, when you're ready to make a
          purchase, our seamless checkout page ensures a smooth and secure
          transaction process. Experience the joy of finding your perfect
          furniture piece at our store, where convenience and quality meet.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/store">
              https://github.com/VIsanAlin/store <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Implemented Features</Meta>
            <br />
            <span>Search functionality on name, company, and price</span>
            <br />
            <span>Additional details view for each furniture item</span>
            <br />
            <span>Checkout page for purchasing furniture items</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS/Javascript/LocalStorage</span>
          </ListItem>
        </List>
        <WorkImage src="/images/projects/thumbnailStore.png" alt="Store" />
      </Container>
    </Layout>
  )
}

export default Work
