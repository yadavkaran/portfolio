import { Box, Container, Heading, Text, Button, Icon, Link, Flex, VStack, HStack, Input, Textarea } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <Box pt={20} minH="100vh">
      <Flex align="center" justify="center" w="100vw" minH="100vh">
        <VStack spacing={10} maxW="lg" mx="auto" w="100%">
          <Heading as="h1" size="2xl" textAlign="center">
            Get in Touch
          </Heading>
          <Text fontSize="xl" textAlign="center" maxW="container.md">
            Feel free to reach out for opportunities or collaborations!
          </Text>
          <VStack spacing={6} w="100%">
            <HStack spacing={8} justify="center">
              <Link href="mailto:ky63272n@pace.edu" target="_blank">
                <Icon as={FaEnvelope} w={8} h={8} />
              </Link>
              <Link href="tel:+12016474238">
                <Icon as={FaPhone} w={8} h={8} />
              </Link>
              <Link href="https://linkedin.com/in/karan–yadav" target="_blank">
                <Icon as={FaLinkedin} w={8} h={8} />
              </Link>
              <Link href="https://github.com/yadavkaran" target="_blank">
                <Icon as={FaGithub} w={8} h={8} />
              </Link>
            </HStack>
            <Text>Email: ky63272n@pace.edu</Text>
            <Text>Phone: (201) 647-4238</Text>
          </VStack>
          <Box w="100%" bg="white" borderRadius="xl" boxShadow="xl" p={8}>
            <VStack spacing={6}>
              <Box w="100%">
                <Text mb={1}>Name</Text>
                <Input type="text" placeholder="Your name" />
              </Box>
              <Box w="100%">
                <Text mb={1}>Email</Text>
                <Input type="email" placeholder="Your email" />
              </Box>
              <Box w="100%">
                <Text mb={1}>Message</Text>
                <Textarea placeholder="Your message" rows={6} />
              </Box>
              <Button colorScheme="blue" size="lg" w="100%">
                Send Message
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Flex>
    </Box>
  )
}

export default Contact 