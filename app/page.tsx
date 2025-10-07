// Esse pertence a app/page.tsx
import HeroSection from '@/components/Sections/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import AudienceSection from '@/components/Sections/AudienceSection';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import BlogMarketingSection from '@/components/Sections/BlogMarketingSection';

// ...restante do código...
// Conteúdo de "Como funciona"
const HowItWorksContent = () => (
    <Box py={16} textAlign="center">
        <Heading as="h3" size="xl" mb={4}>
            Como funciona a nossa plataforma
        </Heading>
        <Text maxW="4xl" mx="auto" mb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </Text>
        <Button variant="link" colorScheme="teal">
            Learn More
        </Button>
    </Box>
);

const Home = () => {
  return (
    <Box>
      <Header />
      <main>
        <Box id="inicio">
          <HeroSection />
        </Box>
        <Box id="audience">
          <AudienceSection />
        </Box>
        <Box id="how-it-works">
          <HowItWorksContent />
        </Box>
        <Box py={8} px={4} maxW="6xl" mx="auto">
            <Text fontSize="sm" color="gray.600">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
            </Text>
        </Box>
        <Box id="programs">
          <StatsSection />
          <BlogMarketingSection />
        </Box>
      </main>
      <Footer />
    </Box>
  );
};

export default Home;