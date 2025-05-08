import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorModeValue, Divider, List, ListItem, ListIcon, Collapse } from '@chakra-ui/react'
import { FaGraduationCap, FaTools, FaBriefcase, FaChevronRight, FaChevronDown, FaCodeBranch, FaDatabase, FaCogs, FaCloud, FaProjectDiagram, FaLaptopCode, FaServer, FaReact, FaJava, FaNodeJs, FaPython, FaAws, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { useState } from 'react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const About = () => {
  const education = {
    school: "Pace University, NY",
    degree: "Master of Science in Computer Science",
    period: "Aug 2023 – May 2025",
    gpa: "GPA: 3.97/4.0",
    courses: ["Data Structures and Algorithms", "Parallel Computing", "Deep Learning", "AI Ethics"]
  }

  // Technical Skills Tree Data
  const skillsTree = [
    {
      label: 'Languages',
      icon: FaCodeBranch,
      children: [
        { label: 'Java', icon: FaJava },
        { label: 'JavaScript', icon: FaJs },
        { label: 'TypeScript', icon: FaJs },
        { label: 'C++', icon: FaCodeBranch },
        { label: 'HTML', icon: FaHtml5 },
        { label: 'CSS', icon: FaCss3Alt },
      ]
    },
    {
      label: 'Frameworks',
      icon: FaProjectDiagram,
      children: [
        { label: 'Spring Boot', icon: FaServer },
        { label: 'JPA/Hibernate', icon: FaServer },
        { label: 'React.js', icon: FaReact },
        { label: 'Node.js', icon: FaNodeJs },
        { label: 'Redux', icon: FaReact },
        { label: 'Spring MVC', icon: FaServer },
        { label: 'Flask', icon: FaPython },
        { label: 'Beautiful Soup', icon: FaPython },
        { label: 'Scrapy', icon: FaPython },
        { label: 'Selenium', icon: FaPython },
      ]
    },
    {
      label: 'Familiar',
      icon: FaCloud,
      children: [
        { label: 'AWS', icon: FaAws },
        { label: 'RDS', icon: FaDatabase },
        { label: 'SQL', icon: FaDatabase },
        { label: 'Kafka', icon: FaCloud },
        { label: 'Django', icon: FaPython },
      ]
    },
    {
      label: 'Concepts',
      icon: FaCogs,
      children: [
        { label: 'Data Structures and Algorithms', icon: FaCogs },
        { label: 'DBMS', icon: FaDatabase },
        { label: 'Operating System', icon: FaCogs },
        { label: 'Low-Level Design', icon: FaCogs },
        { label: 'Microservices', icon: FaServer },
        { label: 'OOPS', icon: FaCogs },
        { label: 'REST APIs', icon: FaServer },
      ]
    },
    {
      label: 'Tools',
      icon: FaTools,
      children: [
        { label: 'IntelliJ IDEA', icon: FaLaptopCode },
        { label: 'Git', icon: FaCodeBranch },
        { label: 'Docker', icon: FaCloud },
        { label: 'MySQL Workbench', icon: FaDatabase },
        { label: 'Postman', icon: FaTools },
        { label: 'VS Code', icon: FaLaptopCode },
        { label: 'Android Studio', icon: FaLaptopCode },
        { label: 'CI/CD pipelines', icon: FaCloud },
      ]
    },
    {
      label: 'Databases',
      icon: FaDatabase,
      children: [
        { label: 'MySQL', icon: FaDatabase },
        { label: 'OracleDB', icon: FaDatabase },
        { label: 'MongoDB', icon: FaDatabase },
        { label: 'PostgreSQL', icon: FaDatabase },
        { label: 'DynamoDB', icon: FaDatabase },
        { label: 'Elastic', icon: FaDatabase },
      ]
    },
  ]

  // For expanding/collapsing skill tree nodes
  const [openNodes, setOpenNodes] = useState<number[]>([])
  const toggleNode = (idx: number) => {
    setOpenNodes((prev) => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx])
  }

  const cardBg = useColorModeValue('white', 'gray.800')
  const cardShadow = 'xl'

  return (
    <Box pt={20} minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}> 
      <Box as={motion.div} display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100vw">
        <VStack spacing={12} align="center" maxW="lg" mx="auto">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, brand.400, brand.600)" bgClip="text" fontWeight="extrabold" textAlign="center">About Me</Heading>
          {/* Education Section */}
          <MotionBox
            p={8}
            maxW="lg"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            boxShadow={cardShadow}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <VStack align="center" spacing={2}>
              <HStack spacing={4} mb={4} justify="center">
                <Icon as={FaGraduationCap} w={8} h={8} color="brand.500" />
                <Heading as="h2" size="lg" textAlign="center">Education</Heading>
              </HStack>
              <Text fontSize="xl" fontWeight="bold" textAlign="center">{education.school}</Text>
              <Text textAlign="center">{education.degree}</Text>
              <Text textAlign="center">{education.period}</Text>
              <Text textAlign="center">{education.gpa}</Text>
              <Text fontWeight="bold" mt={4} textAlign="center">Relevant Courses:</Text>
              <HStack wrap="wrap" spacing={2} mt={2} justify="center">
                {education.courses.map((course, idx) => (
                  <Box as="span" key={idx} bg="blue.100" color="blue.800" px={3} py={1} borderRadius="full" fontSize="sm" m={1}>{course}</Box>
                ))}
              </HStack>
            </VStack>
          </MotionBox>
          {/* Technical Skills Tree Section */}
          <MotionBox
            p={8}
            maxW="lg"
            mx="auto"
            bg={cardBg}
            borderRadius="xl"
            boxShadow={cardShadow}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <VStack align="center" spacing={2}>
              <HStack spacing={4} mb={4} justify="center">
                <Icon as={FaTools} w={8} h={8} color="brand.500" />
                <Heading as="h2" size="lg" textAlign="center">Technical Skills</Heading>
              </HStack>
              <HStack
                spacing={4}
                align="flex-start"
                justify="center"
                flexWrap="wrap"
                w="100%"
                direction={{ base: 'column', md: 'row' }}
              >
                {skillsTree.map((node, idx) => (
                  <Box
                    key={idx}
                    minW="180px"
                    maxW="220px"
                    bg={useColorModeValue('gray.100', 'gray.700')}
                    borderRadius="lg"
                    boxShadow="md"
                    p={4}
                    mb={{ base: 4, md: 0 }}
                  >
                    <HStack spacing={2} cursor="pointer" justify="center" onClick={() => toggleNode(idx)}>
                      <Icon as={openNodes.includes(idx) ? FaChevronDown : FaChevronRight} color="brand.500" />
                      <Icon as={node.icon} color="brand.600" />
                      <Text fontWeight="bold">{node.label}</Text>
                    </HStack>
                    <Collapse in={openNodes.includes(idx)} animateOpacity>
                      <List pl={2} pt={1} spacing={1} style={{ textAlign: 'center' }}>
                        {node.children.map((child, cidx) => (
                          <ListItem key={cidx} display="flex" alignItems="center" justifyContent="center">
                            <ListIcon as={child.icon} color="brand.400" />
                            <Text>{child.label}</Text>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </HStack>
            </VStack>
          </MotionBox>
        </VStack>
      </Box>
    </Box>
  )
}

export default About 