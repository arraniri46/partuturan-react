import {
  Container,
  Box,
  Spacer,
  Image,
  IconButton,
  useColorMode,
  Text
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
const DarkMode = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
    >
      <MoonIcon mb={1} />
    </motion.div>
  )
}

const LightMode = () => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
    >
      <SunIcon mb={1} />
    </motion.div>
  )
}
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Container maxW="container.md" bg="#023e8a" mb={0} shadow="xs">
      <Box display="flex" flexDirection="row" py={2}>
        <Box display="flex" flexDirection="row" w={140}>
          <Image boxSize={8} ml={2} src="/logo192.png" />
          <Text fontSize="1.3em" fontWeight="bold" ml={2} textColor="white">
            Partuturan
          </Text>
        </Box>
        <Spacer />
        <IconButton
          onClick={toggleColorMode}
          icon={isDark ? <DarkMode /> : <LightMode />}
          rounded="full"
          mr={4}
        ></IconButton>
      </Box>
    </Container>
  )
}

export default Navbar
