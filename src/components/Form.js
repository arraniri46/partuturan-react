import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const Form = () => {
  const [kerabat, setKerabat] = useState([])

  const getSelect = (e) => e.target.value

  const getValue = (e) => {
    // if (kerabat.length === 0 || kerabat.every((el) => el !== e.target.value)) {
    //   setKerabat((kerabat) => [...kerabat, e.target.value])
    // } else {
    //   console.log('Data sudah ada!')
    // }
    // console.log(kerabat)
  }
  console.log(kerabat)

  return (
    <Container maxW="container.sm" align="center" margin="auto">
      {/* <Box bg="#660708" h={10} mx={24}></Box> */}

      <Box
        mb={6}
        mx={6}
        bgColor="white"
        position="relative"
        shadow="md"
        maxWidth={400}
        borderWidth={4}
        borderColor="#a9d6e5"
      >
        <FormControl
          id="data"
          textColor="blackAlpha.800"
          py={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
          maxWidth={250}
        >
          <FormLabel>Kerabat dari siapa?</FormLabel>
          <Select variant="outline" placeholder="Pilih Kerabat">
            <option value="ayah">Ayah</option>
            <option value="ibu">Ibu</option>
          </Select>
          <FormLabel>Jenis Kelamin</FormLabel>
          <Select placeholder="Pilih jenis kelamin">
            <option value="pria">Pria</option>
            <option value="wanita">Wanita</option>
          </Select>
          <FormLabel>Kakak / Adik</FormLabel>
          <Select placeholder="Pilih jenjang usia">
            <option value="kakak">Kakak</option>
            <option value="adik">Adik</option>
          </Select>
        </FormControl>

        <p>{kerabat}</p>
      </Box>
      <Button
        bg="#023e8a"
        textColor="whiteAlpha.900"
        variant="solid"
        size="lg"
        rounded={0}
        mt={0}
        onClick={(e) => getValue(e)}
      >
        Lihat Hasil
      </Button>
    </Container>
  )
}

export default Form
