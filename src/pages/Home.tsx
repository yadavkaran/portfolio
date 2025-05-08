import { Box, Container, Heading, Text, Button, VStack, HStack, Icon, useColorModeValue, SimpleGrid, Badge, Image, Flex, Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaTools, FaFileAlt } from 'react-icons/fa'
import { motion, useScroll, useTransform } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

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
      bgGradient={bgGradient}
      pt={20}
      position="relative"
      overflow="hidden"
    >
      {/* Animated background elements */}
      <MotionBox
        position="absolute"
        top="10%"
        left="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="brand.100"
        opacity={0.1}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        right="5%"
        w="200px"
        h="200px"
        borderRadius="full"
        bg="brand.200"
        opacity={0.1}
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <Box as={motion.div} display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100vw" position="relative" zIndex={1}>
        <VStack 
          spacing={12} 
          align="center" 
          py={20}
          textAlign="center"
          w="100%"
          maxW="container.lg"
        >
          <MotionBox
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading 
              as="h1" 
              size="3xl" 
              bgGradient="linear(to-r, brand.400, brand.600)"
              bgClip="text"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Karan Sandesh Yadav
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

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Box
                p={8}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                boxShadow="xl"
                h="100%"
                _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="brand.500">Quick Overview</Heading>
                  <Text>
                    I'm a Full Stack Developer 4 years of professional experience with expertise in Java, Spring Boot, React, and Node.js. 
                    Graduated with my Master's in Computer Science at Pace University in May 2025, NY, with a GPA of 3.99/4.0.
                  </Text>
                  <Text>
                    I've worked on various projects involving real-time data processing, microservices architecture, 
                    and scalable web applications. My focus is on creating efficient, maintainable, and user-friendly solutions.
                  </Text>
                </VStack>
              </Box>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Box
                p={8}
                bg={useColorModeValue('white', 'gray.800')}
                borderRadius="xl"
                boxShadow="xl"
                h="100%"
                _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
                transition="all 0.3s"
              >
                <VStack spacing={4} align="stretch">
                  <Heading size="md" color="brand.500">Expertise</Heading>
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
                  <Text mt={4}>
                    Specializing in building robust, scalable applications with modern technologies
                    and best practices. Experienced in both frontend and backend development.
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          </SimpleGrid>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            w="100%"
            mt={8}
            mx="auto"
          >
            <Box
              p={8}
              bg={useColorModeValue('white', 'gray.800')}
              borderRadius="xl"
              boxShadow="xl"
              _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
              transition="all 0.3s"
            >
              <VStack spacing={4} align="stretch">
                <Heading size="md" color="brand.500">Current Focus</Heading>
                <Text>
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
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  )
}

export default Home 