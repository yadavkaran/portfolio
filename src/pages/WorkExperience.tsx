import { Box, Container, Heading, Text, VStack, HStack, Icon, useColorModeValue, List, ListItem, ListIcon } from '@chakra-ui/react'
import { FaBriefcase, FaChevronRight, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const workex = [
  {
    company: 'Bluedart - DHL',
    role: 'Senior Software Engineer (SSE)',
    period: 'Apr 2022 – Jul 2023',
    desc: [
      'Designed and deployed a real-time courier status tracking module used by 125+ companies, including Apple and Amazon, enabling seamless tracking of 60M+ parcel statuses per day through optimized data flow and scalable architecture. Worked with project managers on finance-related availability metrics.',
      'Built a sell program to convert complex logistics data from EDI formats to JSON/XML; developed a custom reusable JAR using design patterns and deployed it across multiple systems to streamline integration with external partner APIs. Leveraged Apache Cassandra and SQL Server for distributed data needs.',
      'Optimized APIs by migrating code from Camel to Java DSL, boosting shipment processing from 40M to 60M daily and integrating build tools into deployment. Used Python scripts for automation and GCP pipelines for deployment strategy.',
      'Implemented Redis caching to enhance query performance, reducing API response time and improving system scalability. Deployed services using Kubernetes and Azure DevOps to manage the development environment.',
      'Redesigned a high-performance data pipeline using ELK and RabbitMQ, improving data polling speed from 2K to 5K per second and increasing load capacity by 60%. Collaborated with user groups to identify issues, apply code review standards, and adopt emerging technologies.'
    ]
  },
  {
    company: 'Gilded',
    role: 'Software Developer',
    period: 'Jul 2020 – Mar 2022',
    desc: [
      'Designed process flows, configured MySQL, and identified API requirements, reducing customer service queries by 40%. Contributed to NoSQL migration and software architecture discussions for better technology adoption.',
      'Configured and maintained REST API endpoints, integrated third-party services (JIRA, HubSpot), and optimized payment and fee calculations to enhance system performance by 60%. Followed SDLC best practices and DevOps monitoring.',
      'Managed Jira tickets, handled support issues from both customers and QA/testing teams, documented business scenarios, and automated data reconciliation processes, improving data accuracy by 70% and overall workflow efficiency. Engaged in technical leadership sessions and cross-team programming alignment.',
      'Employed Swagger for API documentation and Postman for functional testing; conducted integration and regression testing in IDE environments. Used Maven and JUnit for build and validation cycles across application modules.'
    ]
  },
  {
    company: 'Kryptech Solutions',
    role: 'Co-Founder',
    period: 'Nov 2019 – Jun 2020',
    desc: [
      'Co-founded a company providing digital services such as website development, SEO, Digital Marketing, and partnerships with consumer-focused websites. Evaluated technology stacks for adoption in fintech and retail contexts.',
      "Led digital transformation projects, helping B2B manufacturers establish a strong online presence and company's reach using JavaScript and UI-driven strategies. Built a flexible development environment for rapid prototyping and deployment."
    ]
  },
  {
    company: 'Universal College of Engineering',
    role: 'Intern Frontend Developer',
    period: 'Jun 2019 – Jun 2020',
    desc: [
      'Implemented UI components for a MIS using React.js and Bootstrap, improving usability. Also worked with Snow-style theming and styling. Introduced programming structure aligned with university-wide technology initiatives.',
      'Simplified modules for faculty and students, enabling 80% faster access to attendance, assignments, scheduling, and grievance handling, improving user engagement by 35%. Participated in user groups and strategy meetings to improve adoption and UX.'
    ]
  }
]

const WorkExperience = () => {
  const cardBg = useColorModeValue('white', 'gray.800')
  const cardShadow = 'xl'

  return (
    <Box pt={20} minH="100vh" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Box as={motion.div} display="flex" alignItems="center" justifyContent="center" minH="100vh" w="100vw">
        <VStack spacing={12} align="center" mx="auto">
          <Heading as="h1" size="2xl" bgGradient="linear(to-r, brand.400, brand.600)" bgClip="text" fontWeight="extrabold" textAlign="center">Professional Experience</Heading>
          <HStack
            spacing={6}
            align="flex-start"
            justify="center"
            flexWrap="wrap"
            w="100%"
            direction={{ base: 'column', md: 'row' }}
          >
            {workex.map((job, idx) => (
              <MotionBox
                key={idx}
                p={8}
                w="320px"
                mx="auto"
                bg={cardBg}
                borderRadius="xl"
                boxShadow={cardShadow}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                mb={{ base: 6, md: 0 }}
              >
                <HStack spacing={4} mb={2} justify="center">
                  <Icon as={FaBriefcase} w={6} h={6} color="brand.500" />
                  <Heading as="h3" size="md" textAlign="center">{job.role}</Heading>
                  <Text color="brand.500" fontWeight="bold" textAlign="center">@ {job.company}</Text>
                </HStack>
                <Text fontSize="sm" color="gray.500" mb={2} textAlign="center">{job.period}</Text>
                <List spacing={2} style={{ textAlign: 'center' }}>
                  {job.desc.map((d, i) => (
                    <ListItem key={i} display="flex" alignItems="center" justifyContent="center">
                      <ListIcon as={FaChevronRight} color="brand.400" />
                      <Text>{d}</Text>
                    </ListItem>
                  ))}
                </List>
              </MotionBox>
            ))}
          </HStack>
        </VStack>
      </Box>
    </Box>
  )
}

export default WorkExperience 