import { AUDIENCE_TARGETS } from "@/lib/constants";
import { Box, Card, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const AudienceSection = () => (
  // Box Pai: Fundo cinza claro da seção (gray.50)
  <Box id="audience" py={16} bg="white"> 
    <Heading as="h2" size="xl" textAlign="center" mb={10}>
      Para quem é o RecruitMe?
    </Heading>
    
    <SimpleGrid 
      columns={[3, null, 3]}
      spacing={8} 
      maxW="6xl" 
      mx="auto" 
      px={4} 
      bg="white" 
    >
      {AUDIENCE_TARGETS.map((target) => (
        // 2. O Card será o container principal.
        <Card 
          key={target.title} 
          bg="white" // Fundo branco do Card
          borderRadius="xl" // Bordas arredondadas suaves
          p={6} // Padding interno
          textAlign="center" // Centraliza todo o texto dentro
          boxShadow="lg" // Sombra suave para destacar
        >
          {/* 3. VStack: Usado para organizar e centralizar verticalmente todo o conteúdo */}
          <VStack spacing={6} align="center"> 
            
            {/* 4. Box do Ícone: Container que cria o fundo colorido (o "verde claro") */}
            <Box
              bg="green.50" // Cor de fundo do ícone (simulando o verde claro)
              borderRadius="lg" // Bordas arredondadas
              p={3} // Padding para o ícone interno
              display="inline-flex" // Garante que o Box se ajuste ao tamanho do conteúdo
              alignItems="center" // Centraliza o emoji
              justifyContent="center" // Centraliza o emoji
            >
          <Text fontSize="2xl" aria-label={target.title} role="img">
            {target.icon} 
          </Text>
            </Box>

            {/* 6. Título do Card: Mais escuro e maior, como na imagem */}
            <Heading as="h3" size="md" color="gray.800" fontWeight="extrabold" mt={2}>
              {target.title}
            </Heading>
            
          </VStack>
        </Card>
      ))}
    </SimpleGrid>
  </Box>
);
export default AudienceSection;