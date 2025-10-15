// Esse pertence a app/page.tsx
import HeroSection from '@/components/Sections/HeroSection';
import StatsSection from '@/components/Sections/StatsSection';
import AudienceSection from '@/components/Sections/AudienceSection';
import { Box, Heading, Text, Button, Container, 
  VStack, 
  List, 
  ListItem, 
} from '@chakra-ui/react';
import Header from '@/components/Layouts/Header';
import Footer from '@/components/Layouts/Footer';
import BlogMarketingSection from '@/components/Sections/BlogMarketingSection';

// ...restante do código...
// Componente simples para renderizar o emoji no lugar do ListIcon
const ListBullet = ({ children, color = 'teal.500' }) => (
  <Text as="span" fontSize="xl" color={color} mr={2} verticalAlign="middle">
    {children}
  </Text>
);


const HowItWorksSection = () => {
  // Cor fixa definida, eliminando a dependência do useColorModeValue
  const listItemColor = 'gray.700'; 
  
  return (
    <Box py={{ base: 12, md: 20 }} bg="white"> {/* Fundo branco para contraste */}
      <Container maxW="4xl"> {/* O Container controla a largura máxima */}
        
        <VStack spacing={6} align="left" mx="auto" maxW="3xl">
          
          {/* TÍTULO PRINCIPAL */}
          <Heading 
            as="h2" 
            size="xl" 
            mb={2} 
            fontWeight="extrabold"
            color="gray.800"
          >
            Como a plataforma RecruitMe funciona?
          </Heading>
          
          {/* SUBTÍTULO */}
          <Text 
            fontSize={{ base: 'lg', md: 'xl' }} 
            color="teal.600" 
            fontWeight="semibold"
            mb={4} // Espaçamento maior após o subtítulo
          >
            Somos o Hub de Conexões de Alto Valor que elimina o ruído do mercado tech.
          </Text>

          <Text fontSize="lg" color="gray.600">
            A RecruitMe atua como um GPS para o seu futuro. Veja como facilitamos a jornada para cada público:
          </Text>

          <List spacing={5}>
            
            {/* Benefício 1: Talentos */}
            <ListItem fontSize={{ base: 'md', md: 'lg' }} color={listItemColor} display="flex" alignItems="flex-start">
              <ListBullet>➡️</ListBullet> 
              <Text flex="1">
                <Text as="span" fontWeight="bold" mr={1}>Para Talentos:</Text>
                <Text as="span">Transformamos a busca em descoberta: centralizamos os melhores bootcamps e estágios, entregando as oportunidades que realmente impulsionam sua carreira.</Text>
              </Text>
            </ListItem>
            
            {/* Benefício 2: Empresas */}
            <ListItem fontSize={{ base: 'md', md: 'lg' }} color={listItemColor} display="flex" alignItems="flex-start">
              <ListBullet>🏢</ListBullet>
              <Text flex="1">
                <Text as="span" fontWeight="bold" mr={1}>Para Empresas:</Text>
                <Text as="span">Garantimos acesso imediato a talentos que foram mapeados e pré-qualificados, acelerando a contratação e garantindo o encaixe ideal.</Text>
              </Text>
            </ListItem>
            
            {/* Benefício 3: Comunidades */}
            <ListItem fontSize={{ base: 'md', md: 'lg' }} color={listItemColor} display="flex" alignItems="flex-start">
              <ListBullet>🌐</ListBullet>
              <Text flex="1">
                <Text as="span" fontWeight="bold" mr={1}>Para Comunidades:</Text>
                <Text as="span">Potencializamos o impacto, oferecendo a vitrine perfeita para eventos e cursos, multiplicando o alcance e a capacitação.</Text>
              </Text>
            </ListItem>

          </List>
          
          <Text fontSize="md" color="gray.500" mt={6} pt={4} borderTop="1px solid" borderColor="gray.100">
            Nosso foco é simples: conectar quem capacita a quem constrói o futuro da tecnologia, gerando resultados duradouros e sem desperdício de tempo.
          </Text>

        </VStack>
      </Container>
    </Box>
  );
};

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
          <HowItWorksSection />
        </Box>
        <Box py={8} px={4} maxW="6xl" mx="auto">
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