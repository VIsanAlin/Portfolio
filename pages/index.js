import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  List,
  Button,
  Icon,
  useColorModeValue,
  ListItem
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha. ', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          🚀 Frontend Developer | 💻 UI/UX Enthusiast
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Portfolio
            </Heading>
            <Heading as="h2" variant="page-title">
              Alin Bogdan Visan
            </Heading>
            <p>Frontend ( Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph fontSize="md" mb={4}>
            Passionate about crafting exceptional user experiences, I specialize
            in building responsive and performant web applications using
            cutting-edge technologies.
          </Paragraph>
          <Paragraph fontSize="md" mb={4}>
            My journey in web development began 3 years ago, and since then,
            I've had the privilege of working on diverse projects. I thrive on
            challenges and am always eager to learn new tools and techniques.
          </Paragraph>
          <Paragraph fontSize="md" mb={4}>
            🎓 Graduated with a degree in [Your Degree] | 📍 Based in [Your
            Location]
          </Paragraph>
          <Paragraph fontSize="md" mb={4}>
            When I'm not coding, you can find me exploring the latest design
            trends.
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={NextLink} href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </Link>{' '}
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Bucharest, Romania
          </BioSection>
          <BioSection>
            <BioYear>2019 to present</BioYear>
            Started working for Allview as a Software Developer
          </BioSection>
          <BioSection>
            <BioYear>2022-2023</BioYear>
            Course to improve my frontend skills at Link Academy
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>Escape room, Basketball, Ice skating, Travel</Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Links
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/VIsanAlin" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  VIsanAlin
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://linkedin.com/in/alin-bogdan-visan-6b9986160"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Visan Alin Bogdan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
