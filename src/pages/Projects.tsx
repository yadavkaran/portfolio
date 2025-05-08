import { Box, Container, Heading, Text, SimpleGrid, Icon, Flex } from '@chakra-ui/react'
import { FaBriefcase, FaCode, FaDatabase, FaServer, FaGithub } from 'react-icons/fa'

const Projects = () => {
 

  const projects = [
    {
      title: 'Sales Data Analyzer',
      technologies: ['Java', 'Springboot', 'SQL', 'Tomcat'],
      description: 'Developed a Sales Data Analyzer (SDA) using Java and Spring Boot, integrating MySQL for normalized data storage and implementing dynamic sales analytics through ChartJS and jQuery. Implemented secure authentication and interactive data visualization.',
      icon: FaDatabase,
      github: 'https://github.com/yadavkaran/sales-data-analyzer'
    },
    {
      title: 'Leetcode pro',
      technologies: ['NodeJs', 'Mongo', 'ReactJs', 'JWT token'],
      description: 'Created LeetCode Revise Pro using the MERN stack, implementing MCQ-based revision, comprehensive DSA exams, and Google Forms API integration. Engineered a secure admin dashboard with JWT authentication and role-based access control.',
      icon: FaCode,
      github: 'https://github.com/yadavkaran/leetcode-pro'
    },
    {
        title: 'VD legal Assistant',
        technologies: ['Python 3.10', 'PyPDF2 ', 'Google Gemini', 'Streamlit '],
        description: ' VD - Compliance & Legal Assistant VD is an AI-powered legal and compliance assistant designed specifically for startups, small businesses, and corporate teams. It helps founders, legal professionals, and compliance officers stay informed, draft documents, analyze contracts, and maintain regulatory compliance — without needing a full legal department',
        icon: FaCode,
        github: 'https://github.com/yadavkaran/vd-legal-assistant'
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
      github: 'https://github.com/yadavkaran/event-driven-realtime-systems'
    }
  ]

  return (
    <Box pt={20}>
        <Box py={20}>
      
         

          {/* Projects */}
          <Box>
            <Heading as="h2" size="xl" mb={6} textAlign="center">
              <FaCode style={{ display: 'inline', marginRight: '8px' }} />
              Projects
            </Heading>
            <SimpleGrid minChildWidth="320px" gap={10} justifyItems="center">
              {projects.map((project, index) => (
                <Box
                  key={index}
                  p={6}
                  borderWidth="1px"
                  borderRadius="lg"
                  _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s' }}
                >
                  <Heading as="h3" size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {project.technologies.join(' • ')}
                  </Text>
                  <Text mb={4}>{project.description}</Text>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', color: '#24292f', fontWeight: 'bold', textDecoration: 'none' }}>
                    <FaGithub style={{ marginRight: '6px' }} />
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