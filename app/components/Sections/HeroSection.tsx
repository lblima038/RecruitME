import { 
  Box, 
  Heading, 
  Text, 
  Button, 
  Container, 
  Flex, 
  SimpleGrid,
  Img,
} from '@chakra-ui/react';
// Lista de Parceiros com URLs de ícones externos (para demonstração)
const PARTNER_LOGOS = [
  { name: "Rocketseat", src: "https://unpkg.com/simple-icons@v11/icons/react.svg" }, // Ícone do React como placeholder
  { name: "Accenture", src: "https://unpkg.com/simple-icons@v11/icons/googlecloud.svg" }, // Ícone do Google Cloud como placeholder
  { name: "Microsoft", src: "https://unpkg.com/simple-icons@v11/icons/microsoft.svg" }, // Ícone da Microsoft
  { name: "Deloitte", src: "https://unpkg.com/simple-icons@v11/icons/npm.svg" }, // Ícone do NPM como placeholder
  { name: "Google", src: "https://unpkg.com/simple-icons@v11/icons/npm.svg"}, // Ícone do Google
  { name: "Meta", src: "https://unpkg.com/simple-icons@v11/icons/meta.svg" }, // Ícone da Meta
];

const HeroSection = () => {
  return (
    <Box py={20} textAlign="center">
      <Container maxW="4xl">
        
        {/* Título Principal */}
        <Heading as="h1" size="2xl" mb={4}>
          Conecte-se a programas de formação em tecnologia
        </Heading>
        
        {/* Botão principal (Registro) */}
        <Button colorScheme="teal" size="lg" mt={6} as="a" href="/pages/signup" mb={12}>
          Registrar
        </Button>
        
        {/* Container da Seção de Parcerias */}
        <Flex 
          justify="center" 
          align="center" 
          direction="column"
        >
          {/* Título e Subtítulo da Parceria */}
          <Heading as="h3" size="md" mb={1} color="gray.600">
            Parcerias
          </Heading>
          <Text fontSize="lg" mb={8} color="gray.500">
            Mais de 500+ empresas
          </Text>
          
          {/* GRIDE DOS LOGOS (com URLs externas) */}
          <SimpleGrid 
            columns={{ base: 3, sm: 4, md: 6 }} // 3 colunas no mobile, 6 no desktop
            spacing={{ base: 6, md: 8 }} 
            justifyItems="center"
            maxW="4xl" 
            mx="auto" 
          >
            {PARTNER_LOGOS.map((partner) => (
              <Img
                key={partner.name}
                src={partner.src} 
                alt={`${partner.name} Logo`} 
                maxH="30px" 
                w="auto" 
                // Estilo para o efeito "apagado"
                filter="grayscale(100%) opacity(70%)" 
                _hover={{ filter: 'grayscale(0%) opacity(100%)' }}
                transition="0.3s"
                display="block"
              />
            ))}
          </SimpleGrid>
          
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
