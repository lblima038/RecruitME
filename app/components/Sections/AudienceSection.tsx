// Esse pertence a app/Sections/AudienceSections.tsx
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

const AudienceSection = () => {
  const targets = [
    { title: 'Estudantes', content: 'Our membership management software provides full automation of membership renewals and payments' },
    { title: 'Empresas', content: 'Our membership management software provides full automation of membership renewals and payments' },
    { title: 'Clubs And Groups', content: 'Our membership management software provides full automation of membership renewals and payments' },
  ];

  return (
    <Box py={16}>
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Para quem é o RecruitMe?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="6xl" mx="auto" px={4}>
        {targets.map((target) => (
          <Box key={target.title} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Heading as="h5" size="md" mb={3} color="teal.500">
              {target.title}
            </Heading>
            <Text>{target.content}</Text>
          </Box>
        ))}
        <Text fontSize="sm" mt={4}>
          Ache oportunidades de emprego facilmente
        </Text>
      </SimpleGrid>
    </Box>
  );
};

export default AudienceSection;