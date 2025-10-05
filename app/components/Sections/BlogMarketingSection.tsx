// Esse pertence a app/Sections/BlogMarketingSection.tsx
import { Box, Heading, Text, VStack, SimpleGrid, Link } from '@chakra-ui/react';

const BlogMarketingSection = () => {
    return (
        <Box py={20} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
                Caring is the new marketing
            </Heading>
            <Text maxW="3xl" mx="auto" mb={10}>
                The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
            </Text>
            <VStack mb={12}>
                <Text fontStyle="italic" color="gray.600">
                    "Meet all customers"
                </Text>
                <Text fontWeight="bold">Tim Smith</Text>
                <Text fontSize="sm">British Dragon Boat Racing Association</Text>
            </VStack>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="6xl" mx="auto">
                <Box>
                    <Heading size="sm">Creating Streamlined Safeguarding Processes with OneRen</Heading>
                    <Link color="teal.500" mt={2}>Readmore</Link>
                </Box>
                <Box>
                    <Heading size="sm">What are your safeguarding responsibilities and how can you manage them?</Heading>
                    <Link color="teal.500" mt={2}>Readmore</Link>
                </Box>
                <Box>
                    <Heading size="sm">Revamping the Membership Model with Triathlon Australia</Heading>
                    <Link color="teal.500" mt={2}>Readmore</Link>
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default BlogMarketingSection;