import { Box,  Heading, Text, Button, VStack, HStack, Icon, useColorModeValue, SimpleGrid, Badge, Flex, Tag, TagLabel, TagLeftIcon, Image } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaTools, FaFileAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, brand.50, white)',
    'linear(to-br, gray.900, gray.800)'
  )

  const skills = [
    { icon: FaCode, label: 'Frontend', color: 'blue' },
    { icon: FaServer, label: 'Backend', color: 'green' },
    { icon: FaDatabase, label: 'Database', color: 'purple' },
    { icon: FaTools, label: 'DevOps', color: 'orange' }
  ]

  return (
    <Box 
      minH="100vh" 
      bgGradient="linear(to-br, #0f2027, #2c5364)"
      pt={20}
      position="relative"
      overflow="hidden"
    >

      <Box as={motion.div} display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100vw" position="relative" zIndex={1}>
        <VStack 
          spacing={8} 
          align="center" 
          py={20}
          textAlign="center"
          w={{ base: "full", md: "lg" }}
          mx="auto"
          px={4}
          maxW="1400px"
        >
          <Image
            src="/profile.jpg"
            alt="Karan Sandesh Yadav"
            boxSize="180px"
            borderRadius="full"
            objectFit="cover"
            mx="auto"
            mb={6}
          />
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading 
              as="h1" 
              size={{ base: "3xl", md: "4xl" }} 
              mb={4}
              textAlign="center"
              fontFamily="mono"
              bgGradient="linear(to-r, purple.400, blue.500)"
              bgClip="text"
            >
              KARAN YADAV
            </Heading>
            <Text 
              fontSize="2xl" 
              color="gray.500"
              mt={2}
            >
              Full Stack Developer / AI Ethics Researcher
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text 
              fontSize="xl" 
              color="gray.600"
              maxW="container.md"
              lineHeight="tall"
            >
              Passionate about building scalable applications and solving complex problems.
              Transforming ideas into elegant, efficient, and user-friendly solutions.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HStack spacing={6}>
              <Button
                as="a"
                href="https://github.com/yadavkaran"
                target="_blank"
                leftIcon={<Icon as={FaGithub} />}
                colorScheme="brand"
                variant="solid"
                size="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://linkedin.com/in/karan–yadav"
                target="_blank"
                leftIcon={<Icon as={FaLinkedin} />}
                colorScheme="brand"
                variant="outline"
                size="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                LinkedIn
              </Button>
              <Button
                as="a"
                href="mailto:ky63272n@pace.edu"
                leftIcon={<Icon as={FaEnvelope} />}
                colorScheme="brand"
                variant="outline"
                size="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Email
              </Button>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1n3Q5nTA4ebACWgKPnTCocWDcjf9BkitD/view?usp=sharing"
                target="_blank"
                leftIcon={<Icon as={FaFileAlt} />}
                colorScheme="brand"
                variant="outline"
                size="lg"
                _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                transition="all 0.2s"
              >
                Resume
              </Button>
            </HStack>
          </MotionBox>

          <Flex
            direction={{ base: 'column', md: 'row' }}
            justify="center"
            align="flex-start"
            gap={10}
            w="100%"
            maxW="1100px"
            mx="auto"
            flexWrap="wrap"
          >
            <Box
              p={{ base: 8, md: 10 }}
              bg="rgba(255,255,255,0.12)"
              borderRadius="2xl"
              boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.10)"
              borderLeft="8px solid #a259fa"
              maxW="500px"
              w="100%"
              m="auto"
              fontFamily="'Inter', 'Segoe UI', Arial, sans-serif"
              transition="all 0.3s"
            >
              <VStack spacing={6} align="stretch">
                <Heading size="lg" color="#a259fa" fontWeight="bold" mb={2} letterSpacing="tight">Quick Overview</Heading>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                  I'm a Full Stack Developer 4 years of professional experience with expertise in Java, Spring Boot, React, and Node.js. 
                  Graduated with my Master's in Computer Science at Pace University in May 2025, NY, with a GPA of 3.97/4.0.
                </Text>
                <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                  I've worked on various projects involving real-time data processing, microservices architecture, 
                  and scalable web applications. My focus is on creating efficient, maintainable, and user-friendly solutions.
                </Text>
              </VStack>
            </Box>

            <Box
              p={{ base: 8, md: 10 }}
              bg="rgba(255,255,255,0.12)"
              borderRadius="2xl"
              boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.10)"
              borderLeft="8px solid #a259fa"
              maxW="500px"
              w="100%"
              m="auto"
              fontFamily="'Inter', 'Segoe UI', Arial, sans-serif"
              transition="all 0.3s"
            >
              <VStack spacing={6} align="stretch">
                <Heading size="lg" color="#a259fa" fontWeight="bold" mb={2} letterSpacing="tight">Expertise</Heading>
                <SimpleGrid columns={2} spacing={4}>
                  {skills.map((skill, index) => (
                    <Tag
                      key={index}
                      size="lg"
                      borderRadius="full"
                      variant="solid"
                      colorScheme={skill.color}
                      _hover={{ transform: 'scale(1.05)' }}
                      transition="all 0.2s"
                    >
                      <TagLeftIcon as={skill.icon} />
                      <TagLabel>{skill.label}</TagLabel>
                    </Tag>
                  ))}
                </SimpleGrid>
                <Text mt={4} color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                  Specializing in building robust, scalable applications with modern technologies
                  and best practices. Experienced in both frontend and backend development.
                </Text>
              </VStack>
            </Box>
          </Flex>

          <Box
            p={{ base: 8, md: 10 }}
            bg="rgba(255,255,255,0.12)"
            borderRadius="2xl"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.10)"
            borderLeft="8px solid #a259fa"
            maxW="1050px"
            w="100%"
            m="48px auto 0 auto"
            fontFamily="'Inter', 'Segoe UI', Arial, sans-serif"
            transition="all 0.3s"
          >
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color="#a259fa" fontWeight="bold" mb={2} letterSpacing="tight">Current Focus</Heading>
              <Text color="white" fontSize={{ base: 'md', md: 'lg' }} lineHeight={1.8}>
                Currently focused on mastering advanced concepts in Computer Science and expanding
                my expertise in cloud technologies and distributed systems.
              </Text>
              <Flex wrap="wrap" gap={2}>
                <Badge colorScheme="orange" fontSize="sm" px={2} py={1} borderRadius="full">AI ethics</Badge>
                <Badge colorScheme="blue" fontSize="sm" px={2} py={1} borderRadius="full">LLM model</Badge>
                <Badge colorScheme="green" fontSize="sm" px={2} py={1} borderRadius="full">Distributed Systems</Badge>
                <Badge colorScheme="purple" fontSize="sm" px={2} py={1} borderRadius="full">Machine Learning</Badge>
                <Badge colorScheme="red" fontSize="sm" px={2} py={1} borderRadius="full">Cloud Computing</Badge>
                <Badge colorScheme="pink" fontSize="sm" px={2} py={1} borderRadius="full">Parallel Computing</Badge>
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default Home 