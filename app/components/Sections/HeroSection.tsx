// Esse pertence a app/Sections/HeroSection.tsx
import { Box, Heading, Text, Button, Container, Flex } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box py={20} textAlign="center">
      <Container maxW="4xl">
        <Heading as="h1" size="2xl" mb={4}>
          Conecte-se a programas de formação em tecnologia
        </Heading>
        <Button colorScheme="teal" size="lg" mt={6} as="a" href="/pages/signup">
          Registrar
        </Button>
        <Flex justify="center" align="center" mt={12} direction="column">
          <Heading as="h3" size="md" mb={2}>
            Parcerias
          </Heading>
          <Text fontSize="lg">
            Mais de 500+ empresas
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;