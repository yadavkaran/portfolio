import { Box,  Heading, Text, VStack, HStack, Icon, useColorModeValue, List, ListItem, ListIcon, Collapse, Flex } from '@chakra-ui/react'
import { FaGraduationCap, FaTools, FaChevronRight, FaChevronDown, FaCodeBranch, FaDatabase, FaCogs, FaCloud, FaProjectDiagram, FaLaptopCode, FaServer, FaReact, FaJava, FaNodeJs, FaPython, FaAws, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa'
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
    <Box pt={20} minH="100vh" bgGradient="linear(to-br, #0f2027, #2c5364)"> 
      <Box as={motion.div} display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100vw">
        <VStack spacing={12} align="center" maxW="lg" mx="auto">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, purple.400, blue.500)" bgClip="text" textAlign="center" fontFamily="mono">
            About Me
          </Heading>
          {/* Education Section */}
          <MotionBox
            p={8}
            maxW="lg"
            mx="auto"
            bg="rgba(20, 20, 30, 0.85)"
            borderRadius="2xl"
            boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            border="1px solid rgba(255,255,255,0.18)"
            backdropFilter="blur(6px)"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
          >
            <VStack align="center" spacing={2}>
              <HStack spacing={4} mb={4} justify="center">
                <Icon as={FaGraduationCap} w={8} h={8} color="brand.500" />
                <Heading as="h2" size="lg" textAlign="center" color="white">Education</Heading>
              </HStack>
              <Text fontSize="xl" fontWeight="bold" textAlign="center" color="white">{education.school}</Text>
              <Text textAlign="center" color="white">{education.degree}</Text>
              <Text textAlign="center" color="white">{education.period}</Text>
              <Text textAlign="center" color="white">{education.gpa}</Text>
              <Text fontWeight="bold" mt={4} textAlign="center" color="white">Relevant Courses:</Text>
              <HStack wrap="wrap" spacing={2} mt={2} justify="center">
                {education.courses.map((course, idx) => (
                  <Box as="span" key={idx} bg="blue.100" color="blue.800" px={3} py={1} borderRadius="full" fontSize="sm" m={1}>{course}</Box>
                ))}
              </HStack>
            </VStack>
          </MotionBox>
          {/* Technical Skills Badges Cloud Section */}
          <Box
            p={8}
            maxW="lg"
            mx="auto"
            bg="rgba(30, 30, 40, 0.92)"
            borderRadius="2xl"
            boxShadow="0 8px 32px 0 rgba(127, 90, 240, 0.18)"
            border="2px solid rgba(127,90,240,0.18)"
            backdropFilter="blur(14px)"
            mt={4}
          >
            <VStack align="center" spacing={6}>
              <HStack spacing={4} mb={2} justify="center">
                <Icon as={FaTools} w={8} h={8} color="purple.300" />
                <Heading as="h2" size="lg" textAlign="center" color="purple.200" fontFamily="mono">Technical Skills</Heading>
              </HStack>
              <Flex wrap="wrap" justify="center" gap={3}>
                {/* Flatten all skills from skillsTree */}
                {skillsTree.flatMap(node => node.children.map(child => ({...child, category: node.label}))).map((skill, idx) => (
                  <Box
                    key={idx}
                    display="flex"
                    alignItems="center"
                    px={3}
                    py={2}
                    bg="rgba(127,90,240,0.15)"
                    borderRadius="full"
                    boxShadow="md"
                    m={1}
                  >
                    <Icon as={skill.icon} color="purple.300" boxSize={5} mr={2} />
                    <Text color="white" fontWeight="medium" fontSize="md" fontFamily="mono">{skill.label}</Text>
                  </Box>
                ))}
              </Flex>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Box>
  )
}

export default About 