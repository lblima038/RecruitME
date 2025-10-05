// Esse pertence a app/Sections/StatsSection.tsx
import { Box, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react';

const StatsSection = () => {
  const statData = [
    { value: '2,245,341', label: 'Members' },
    { value: '46,328', label: 'Clubs' },
    { value: '828,867', label: 'Event Bookings' },
    { value: '1,926,436', label: 'Payments'},
  ];

  return (
    <Box py={16} bg="gray.50" textAlign="center">
      <Heading as="h3" size="xl" mb={8}>
        Dados que demonstram confiança
      </Heading>
      <Text mb={10}>
        We reached here with our hard work and dedication
      </Text>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} maxW="6xl" mx="auto">
        {statData.map((stat) => (
          <VStack key={stat.label}>
            <Heading size="xl" color="teal.500">{stat.value}</Heading>
            <Text fontWeight="medium">{stat.label}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;