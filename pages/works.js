import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbSpaceTourism from '../public/images/projects/thumbnailSpaceTourism.png'
import thumbWeatherApp from '../public/images/projects/thumbnailWeatherApp.png'
import thumbNews from '../public/images/projects/thumbnailNewsHomepage.jpg'
import thumbMultiForm from '../public/images/projects/thumbnailMultiForm.png'

import thumbStore from '../public/images/projects/thumbnailStore.png'
import thumbOnepage from '../public/images/projects/thumbnailOnepage.png'
import thumbBoostrap from '../public/images/projects/thumbnailBootstrapShop.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Personal projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="spacetourism"
              title="SpaceTourism"
              thumbnail={thumbSpaceTourism}
            >
              A webpage for travelling in space.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="weatherapp"
              title="WeatherApp"
              thumbnail={thumbWeatherApp}
            >
              An application that displays the weather based on actual location.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="newshomepage"
              title="NewsHomepage"
              thumbnail={thumbNews}
            >
              A webpage displaying the homepage of a news page.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="multiform"
              title="MultiForm"
              thumbnail={thumbMultiForm}
            >
              A multiform application for mobile, tablets and displays .
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Divider mb={2} />
        <Heading as="h3" fontSize={20} mb={4}>
          Link Academy Projects{' '}
        </Heading>
        <SimpleGrid column={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="store" title="Store" thumbnail={thumbStore}>
              A store with a few functionalities developed as a challenge.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="onepage" title="OnePage" thumbnail={thumbOnepage}>
              A onepage developed using bootstrap.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="bootstrapshop"
              title="BootstrapShop"
              thumbnail={thumbBoostrap}
            >
              A website created using bootstrap and implementing API as a
              challenge.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
