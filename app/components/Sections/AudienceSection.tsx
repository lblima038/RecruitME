// app/components/Sections/AudienceSection.tsx
import { Box, Heading, Text, SimpleGrid, Card, CardHeader, CardBody } from '@chakra-ui/react';
import { AUDIENCE_TARGETS } from '@/lib/constants';

const AudienceSection = () => {
  return (
    <Box id="audience" py={16} bg="gray.50">
      <Heading as="h2" size="xl" textAlign="center" mb={10}>
        Para quem é o RecruitMe?
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="6xl" mx="auto" px={4}>
        {AUDIENCE_TARGETS.map((target) => (
          <Card key={target.title} shadow="md" borderWidth="1px" borderRadius="lg">
            <CardHeader>
              <Heading as="h3" size="md" color="teal.500">
                {target.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text>{target.content}</Text>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AudienceSection;