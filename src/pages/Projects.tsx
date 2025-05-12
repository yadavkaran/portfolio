import { Box,  Heading, Text, SimpleGrid, Icon, Flex, Badge } from '@chakra-ui/react'
import { FaCode, FaDatabase, FaServer, FaGithub } from 'react-icons/fa'

const Projects = () => {
 

  const projects = [
    {
      title: 'Sales Data Analyzer',
      technologies: ['Java', 'Springboot', 'SQL', 'Tomcat'],
      description: 'Developed a Sales Data Analyzer (SDA) using Java and Spring Boot, integrating MySQL for normalized data storage and implementing dynamic sales analytics through ChartJS and jQuery. Implemented secure authentication and interactive data visualization.',
      icon: FaDatabase,
      github: 'https://github.com/yadavkaran/SalesDataAnalyzer'
    },
    {
      title: 'Leetcode pro',
      technologies: ['NodeJs', 'Mongo', 'ReactJs', 'JWT token'],
      description: 'Created LeetCode Revise Pro using the MERN stack, implementing MCQ-based revision, comprehensive DSA exams, and Google Forms API integration. Engineered a secure admin dashboard with JWT authentication and role-based access control.',
      icon: FaCode,
      github: 'https://github.com/yadavkaran/leetcodepro'
    },
    {
        title: 'VD legal Assistant',
        technologies: ['Python 3.10', 'PyPDF2 ', 'Google Gemini', 'Streamlit '],
        description: ' VD - Compliance & Legal Assistant VD is an AI-powered legal and compliance assistant designed specifically for startups, small businesses, and corporate teams. It helps founders, legal professionals, and compliance officers stay informed, draft documents, analyze contracts, and maintain regulatory compliance — without needing a full legal department',
        icon: FaCode,
        github: 'https://github.com/yadavkaran/LegalAssistantAI'
      },
      {
        title: 'RideEase',
        technologies: [ 'Node.js + Express.js', 'React.js + Redux', 'Jenkins '],
        description: 'RideEase is a MERN-stack solution designed to connect drivers and riders with real-time ride booking, payment processing, GPS tracking, and role-based management — all in a secure and scalable environment.',
        icon: FaCode,
        github: 'https://github.com/yadavkaran/Rideease'
      },
    {
      title: 'Event Driven RealTime systems',
      technologies: ['Kafka', 'Java', 'AWS', 'S3', 'Lambda', 'SNS', 'Glue'],
      description: 'Simplified a high-performance real-time data pipeline, leveraging Kafka for live stock data streaming to AWS S3. Utilized AWS Glue Crawler and Amazon Athena for streamlined schema management and querying.',
      icon: FaServer,
      github: 'https://github.com/yadavkaran/'
    }
  ]

  return (
    <Box pt={20} minH="100vh" bgGradient="linear(to-br, #0f2027, #2c5364)">
      <Box py={20}>
       

        {/* Projects */}
        <Box>
          <Heading
            as="h2"
            size="2xl"
            mb={10}
            textAlign="center"
            fontFamily="Fira Mono, monospace"
            color="#7f5af0"
            position="relative"
            _after={{
              content: '""',
              display: 'block',
              width: '60px',
              height: '4px',
              bg: '#7f5af0',
              borderRadius: '2px',
              mx: 'auto',
              mt: 2,
            }}
          >
            <Icon as={FaCode} boxSize={7} mr={2} color="#7f5af0" />
            Projects
          </Heading>
          <SimpleGrid minChildWidth="320px" gap={10} justifyItems="center">
            {projects.map((project, index) => (
              <Box
                key={index}
                p={6}
                borderRadius="2xl"
                bg="rgba(20, 20, 30, 0.85)"
                boxShadow="0 8px 32px 0 rgba(31, 38, 135, 0.37)"
                border="1px solid rgba(255,255,255,0.18)"
                backdropFilter="blur(6px)"
                position="relative"
                transition="all 0.3s"
                _hover={{
                  transform: 'scale(1.04) translateY(-8px)',
                  boxShadow: '0 12px 40px 0 #7f5af0',
                  borderColor: '#7f5af0',
                }}
              >
                <Flex align="center" mb={3} gap={2}>
                  <Icon as={project.icon} color="#7f5af0" boxSize={6} />
                  <Heading as="h3" size="md" fontFamily="Fira Mono, monospace" color="#fff">
                    {project.title}
                  </Heading>
                </Flex>
                <Flex wrap="wrap" gap={2} mb={4}>
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} colorScheme="purple" variant="subtle" fontFamily="Fira Mono, monospace" px={2} py={1} borderRadius="md">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
                <Text mb={4} color="gray.200" fontSize="md">
                  {project.description}
                </Text>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', color: '#7f5af0', fontWeight: 'bold', textDecoration: 'none', fontFamily: 'Fira Mono, monospace' }}>
                  <Icon as={FaGithub} mr={2} />
                  GitHub
                </a>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  )
}

export default Projects 