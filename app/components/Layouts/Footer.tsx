// Esse pertence a app/components/Layouts/Footer.tsx
import { Box, Text, SimpleGrid, VStack, Link, Heading, Input, Button } from '@chakra-ui/react';

const Footer = () => {
  const companyLinks = ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'];
  const supportLinks = ['Help center', 'Terms of service', 'Legal', 'Privacy policy', 'Status'];

  return (
    <Box bg="gray.800" color="white" py={10}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Box textAlign="center" py={10}>
           <Heading as="h2" size="xl" mb={4}>
             Pellentesque suscipit fringilla libero eu.
           </Heading>
           <Button colorScheme="teal" size="lg">
             Get a Demo
           </Button>
        </Box>

        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={8} mt={10}>
          <VStack align="start">
            <Text fontWeight="bold" mb={2}>Company</Text>
            {companyLinks.map(link => <Link key={link} href="#" fontSize="sm">{link}</Link>)}
          </VStack>

          <VStack align="start">
            <Text fontWeight="bold" mb={2}>Support</Text>
            {supportLinks.map(link => <Link key={link} href="#" fontSize="sm">{link}</Link>)}
          </VStack>

          <VStack align="start" gridColumn={{ base: 'span 2', md: 'span 1' }}>
             <Text fontWeight="bold">Stay up to date</Text>
             <Input placeholder="Your email address" size="md" />
          </VStack>
        </SimpleGrid>

        <Box pt={8} borderTop="1px solid" borderColor="gray.700" mt={10} textAlign="center">
          <Text fontSize="sm">
            Copyright © 2020 Landify UI Kit. All rights reserved
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;