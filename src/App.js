import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import About from './components/About'
import Footer from './components/Footer'
import Form from './components/Form'
import Navbar from './components/Navbar'
import theme from './theme.js'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box style={{ fontFamily: 'Inter', bottom: 0, top: 0 }} align="center">
        <Navbar />
        <Box
          maxW="container.md"
          display="flex"
          flexDirection={['column', 'row']}
          mt={20}
        >
          <About />
          <Form />
        </Box>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
