import { Box, Container, Text } from '@chakra-ui/react'

const About = () => {
  return (
    <>
      <Container maxW="container.md">
        <Box flexDirection="column" align="center">
          <Text fontSize={36} fontWeight="extrabold">
            PARTUTURAN BATAK
          </Text>
          <Box
            p={2}
            my={12}
            mx={6}
            bg="#023e8a"
            textColor="white"
            shadow="md"
            maxWidth={400}
          >
            <Text as="h3" fontSize={18} fontWeight="bold">
              About
            </Text>
            <Text fontSize={14}>
              App ini dibuat dalam hal untuk mengetahui panggilan tutur dalam
              adat batak
            </Text>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default About
