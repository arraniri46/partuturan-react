import { Box, Container, Image, Text } from '@chakra-ui/react'

const Footer = (props) => {
  return (
    <>
      <Container
        maxWidth="container.md"
        height={7}
        mt={12}
        bg="#023e8a"
        style={{ position: 'absolute', right: 0, left: 0 }}
        align="center"
      >
        {/* <Image src="/svg/footerWaves.svg"></Image> */}
        {/* <Box h={200} w="100%" rounded={12} bg="#C44536" margin="auto"></Box> */}
        <Text
          style={{ position: 'absolute', bottom: 0, right: 0, left: 0 }}
          align="center"
          textColor="white"
        >
          &copy; 2022 Garda Arraniri. All rights reserved.
        </Text>
      </Container>
    </>
  )
}

export default Footer
