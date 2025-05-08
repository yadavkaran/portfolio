import { Box, Flex, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box 
      bg={bgColor} 
      px={4} 
      position="fixed" 
      w="100%" 
      zIndex={1}
      boxShadow="sm"
      borderBottom="1px"
      borderColor={borderColor}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" maxW="container.xl" mx="auto">
        <ChakraLink 
          as={RouterLink} 
          to="/" 
          fontSize="xl" 
          fontWeight="bold"
          color="brand.500"
          _hover={{ textDecoration: 'none', color: 'brand.600' }}
        >
          Portfolio
        </ChakraLink>

        <Flex gap={8}>
          {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
            <ChakraLink
              key={item}
              as={RouterLink}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              color="gray.600"
              fontWeight="medium"
              position="relative"
              _hover={{
                textDecoration: 'none',
                color: 'brand.500',
                _after: {
                  width: '100%',
                },
              }}
              _after={{
                content: '""',
                position: 'absolute',
                width: '0%',
                height: '2px',
                bottom: '-4px',
                left: '0',
                bg: 'brand.500',
                transition: 'width 0.3s ease-in-out',
              }}
            >
              {item}
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 