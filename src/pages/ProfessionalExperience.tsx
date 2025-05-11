import React from 'react';
import { VStack, Heading, Text, Box, SimpleGrid, Tag, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ProfessionalExperience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Corp',
      duration: '2020 - Present',
      description: 'Developed and maintained web applications using React and Node.js',
      technologies: ['React', 'Node.js', 'JavaScript', 'CSS'],
    },
    {
      title: 'Data Scientist',
      company: 'Data Solutions',
      duration: '2018 - 2020',
      description: 'Analyzed and interpreted large datasets using Python and SQL',
      technologies: ['Python', 'SQL', 'Data Analysis'],
    },
    {
      title: 'Product Manager',
      company: 'Productive Solutions',
      duration: '2016 - 2018',
      description: 'Led a team to develop and launch new products',
      technologies: ['Product Management', 'Agile Methodologies'],
    },
  ];

  return (
    <VStack spacing={8} align="stretch" w="full" maxW="1200px" mx="auto" px={4}>
      <Heading
        as="h1"
        size="2xl"
        bgGradient="linear(to-r, purple.400, blue.500)"
        bgClip="text"
        textAlign="center"
        fontFamily="mono"
      >
        Professional Experience
      </Heading>

      <SimpleGrid columns={1} spacing={6} w="full">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Box
              p={6}
              bg="whiteAlpha.100"
              borderRadius="xl"
              borderWidth="1px"
              borderColor="purple.200"
              _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
              transition="all 0.3s"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #9F7AEA, #4299E1)",
              }}
            >
              <VStack align="start" spacing={4}>
                <Heading size="md" color="purple.400" fontFamily="mono">
                  {exp.title}
                </Heading>
                <Text color="gray.300" fontFamily="mono">
                  {exp.company}
                </Text>
                <Text color="gray.400" fontSize="sm" fontFamily="mono">
                  {exp.duration}
                </Text>
                <Text color="gray.300">{exp.description}</Text>
                <HStack wrap="wrap" spacing={2}>
                  {exp.technologies.map((tech, i) => (
                    <Tag
                      key={i}
                      size="sm"
                      colorScheme="purple"
                      variant="subtle"
                      fontFamily="mono"
                    >
                      {tech}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </VStack>
  );
};

export default ProfessionalExperience; 