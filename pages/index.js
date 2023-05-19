import NextLink from 'next/link'
import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha. ', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a front-end developer based in Romania
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
          Work
        </Heading>
        <Paragraph>
          I am aspiring to become a good front-end developer. I am currently
          finishing my courses at Link Academy and creating different projects
          based on the knowledge i gathered from these courses. All my projects
          can be viewed, in the Works tab like :{' '}
          <Link as={NextLink} href="/works/spacetourism">
            Space Tourism
          </Link>
          .
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
          <BioYear>2022</BioYear>
          Started taking courses to improve my front-end developer skills
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>Escape room, Basketball, Ice skating, Travel</Paragraph>
      </Section>
    </Container>
  )
}

export default Page
