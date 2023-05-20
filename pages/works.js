import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'

import thumbSpaceTourism from '../public/images/thumbnailSpaceTourism.png'
import thumbWeatherApp from '../public/images/thumbnailWeatherApp.png'
import thumbNews from '../public/images/thumbnailNewsHomepage.jpg'
import thumbMultiForm from '../public/images/thumbnailMultiForm.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
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
      </Container>
    </Layout>
  )
}

export default Works
