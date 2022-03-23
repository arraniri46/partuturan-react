import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Select
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const cekPartuturan = (kerabat) => {
  if (kerabat.length === 0) return 'Sedang memilih...'

  if (kerabat[0] === 'ayah') {
    if (kerabat[1] === 'pria') {
      if (kerabat[2] === 'adik') {
        return 'Bapak Uda'
      } else return 'Bapak Tua (Uwak)'
    } else return 'Namboru (Bou)'
  } else {
    if (kerabat[1] === 'wanita') {
      if (kerabat[2] === 'adik') {
        return 'Inang Uda'
      }
      return 'Inang Tua (Uwak)'
    }
    return 'Tulang'
  }
}

const Form = () => {
  const [kerabat, setKerabat] = useState('')
  const [kelamin, setKelamin] = useState('')
  const [jenjang, setJenjang] = useState('')

  const [data, setData] = useState([])
  const [hasil, setHasil] = useState('')

  // const getSelect = (e) => e.target.value

  // const getValue = (e) => {
  //   if (kerabat.length === 0 || kerabat.every((el) => el !== e.target.value)) {
  //     setKerabat((kerabat) => [...kerabat, e.target.value])
  //   } else {
  //     console.log('Data sudah ada!')
  //   }
  //   console.log(kerabat)
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    setData([kerabat, kelamin, jenjang])
    console.log(data)
  }

  useEffect(() => {
    setHasil(cekPartuturan(data))
  }, [data])

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
          onSubmit={handleSubmit}
        >
          <form>
            <FormLabel mt={4}>Kerabat dari siapa?</FormLabel>
            <Select
              variant="outline"
              placeholder="Pilih Kerabat"
              onChange={(e) => setKerabat(e.target.value)}
              required
            >
              <option value="ayah">Ayah</option>
              <option value="ibu">Ibu</option>
            </Select>
            <FormLabel mt={4}>Jenis Kelamin</FormLabel>
            <Select
              placeholder="Pilih jenis kelamin"
              onChange={(e) => setKelamin(e.target.value)}
              required
            >
              <option value="pria">Pria</option>
              <option value="wanita">Wanita</option>
            </Select>
            <FormLabel mt={4}>Kakak / Adik</FormLabel>
            <Select
              placeholder="Pilih jenjang usia"
              onChange={(e) => setJenjang(e.target.value)}
              required
            >
              <option value="kakak">Abang / Kakak</option>
              <option value="adik">Adik</option>
            </Select>
            <button
              style={{
                backgroundColor: '#023e8a',
                color: 'white',
                padding: '10px',
                marginTop: '36px',
                borderRadius: '6px'
              }}
            >
              Lihat Hasil
            </button>
          </form>
        </FormControl>

        {!kerabat && (
          <div
            style={{
              backgroundColor: 'red',
              padding: '20px',
              marginLeft: '50px',
              marginRight: '50px',
              marginBottom: '20px',
              marginTop: '0px',
              borderRadius: '8px',
              color: 'whitesmoke',
              fontWeight: 'bold'
            }}
          >
            Silahkan isi data!
          </div>
        )}
        {kerabat && (
          <div
            style={{
              backgroundColor: 'green',
              padding: '20px',
              marginLeft: '50px',
              marginRight: '50px',
              marginBottom: '20px',
              marginTop: '0px',
              borderRadius: '8px'
            }}
          >
            <p style={{ color: '#fff' }}>
              <b>{hasil}</b>
            </p>
          </div>
        )}
      </Box>
    </Container>
  )
}

export default Form
