import { Box, Button} from '@chakra-ui/react'

import Data from './Data'
import Profile from './Profile'

function Sidebar() {
  return (
    <Box
      as="aside"
      flex={1}
      mr={{ base: 0, md: 5 }}
      mb={{ base: 5, md: 0 }}
      bg="white"
      rounded="md"
      borderWidth={1}
      borderColor="brand.light"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Profile />
      <Data />
      <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button>Regresar</Button>
      </Box>
    </Box>
  )
}

export default Sidebar
