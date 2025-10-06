// app/components/Sections/StatsSection.tsx
import { Box, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react';
import { STATS_DATA } from '@/lib/constants';

const StatsSection = () => {
  return (
    <Box py={16} bg="white" textAlign="center">
      <Heading as="h3" size="xl" mb={4}>
        Dados que demonstram confiança
      </Heading>
      <Text mb={10} color="gray.600">
        Alcançamos estes números com muito trabalho e dedicação.
      </Text>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10} maxW="6xl" mx="auto">
        {STATS_DATA.map((stat) => (
          <VStack key={stat.label}>
            <Heading size="2xl" color="teal.500">{stat.value}</Heading>
            <Text fontWeight="medium" color="gray.500">{stat.label}</Text>
          </VStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default StatsSection;