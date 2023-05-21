import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'

import thumbSpaceTourism from '../public/images/projects/thumbnailSpaceTourism.png'
import thumbWeatherApp from '../public/images/projects/thumbnailWeatherApp.png'
import thumbNews from '../public/images/projects/thumbnailNewsHomepage.jpg'
import thumbMultiForm from '../public/images/projects/thumbnailMultiForm.png'
import thumbCountryApp from '../public/images/projects/thumbnailCountryAPP.jpg'

import thumbStore from '../public/images/projects/thumbnailStore.png'
import thumbOnepage from '../public/images/projects/thumbnailOnepage.png'
import thumbBoostrap from '../public/images/projects/thumbnailBootstrapShop.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Next Projects
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem title="CountryApp" thumbnail={thumbCountryApp}></GridItem>
        </SimpleGrid>
      </Section>
      <Divider mb={4} />
      <Heading as="h3" fontSize={20} mb={4}>
        Work in Progress
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="SpaceTourism"
            thumbnail={thumbSpaceTourism}
            href="https://github.com/VIsanAlin/SpaceTourism"
          ></GridItem>

          <GridItem
            title="MultiForm"
            thumbnail={thumbMultiForm}
            href="https://github.com/VIsanAlin/MultiStepForm"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Divider mb={4} />
      <Heading as="h3" fontSize={20} mb={4}>
        Finished Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} gap={6} mb={4}>
        <GridItem
          title="WeatherApp"
          thumbnail={thumbWeatherApp}
          href="https://github.com/VIsanAlin/WeatherApp"
        ></GridItem>
        <GridItem
          title="NewsHomepage"
          thumbnail={thumbNews}
          href="https://github.com/VIsanAlin/NewsHomepage/tree/main/news-homepage-main"
        ></GridItem>
      </SimpleGrid>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <GridItem
          title="Furniture Store"
          thumbnail={thumbStore}
          href="https://github.com/VIsanAlin/store"
        ></GridItem>
        <GridItem
          title="Onepage"
          thumbnail={thumbOnepage}
          href="https://github.com/VIsanAlin/onepage"
        ></GridItem>
        <GridItem
          title="BootstrapShop"
          thumbnail={thumbBoostrap}
          href="https://github.com/VIsanAlin/BootstrapShop"
        ></GridItem>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Posts
