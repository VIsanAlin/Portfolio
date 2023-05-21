import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="WeatherApp">
      <Container>
        <Title>
          WeatherApp <Badge>2023</Badge>
        </Title>
        <P>
          The Weather App is a user-friendly and efficient tool designed to
          provide users with accurate and real-time weather information for any
          desired location. With its intuitive interface and seamless
          integration with the OpenWeather API, users can easily access current
          weather data, including temperature, humidity, wind speed, and more.
          The app empowers users to make informed decisions regarding their
          daily activities, travel plans, and outfit choices by presenting them
          with up-to-date weather forecasts.
        </P>

        <P>
          Using the Weather App is straightforward and hassle-free. Upon
          launching the app, users are greeted with a clean and minimalistic
          interface. They can simply enter the desired location in the search
          bar and hit enter. The app will quickly retrieve the weather data for
          the specified location from the OpenWeather API and display it on the
          screen. Users can explore additional details such as hourly or
          five-day forecasts by navigating through the app's intuitive
          navigation options. Whether planning for an upcoming trip or checking
          the current weather conditions, the Weather App offers a user-friendly
          experience that keeps users informed and prepared for any weather
          situation.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source Code</Meta>
            <Link href="https://github.com/VIsanAlin/WeatherApp">
              https://github.com/VIsanAlin/WeatherApp{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Mobile/Tablet/Display</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React/Tailwind/WeatherAPI</span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/projects/thumbnailWeatherApp.png"
          alt="WeatherApp"
        />
      </Container>
    </Layout>
  )
}

export default Work
