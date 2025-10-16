import { Box, Heading, Text, VStack, SimpleGrid, Link } from '@chakra-ui/react';

const BlogMarketingSection = () => {
    return (
        <Box py={20} textAlign="center">
            <Heading as="h2" size="xl" mb={4}>
                Histórias de Sucesso | Conexões que Transformam
            </Heading>
            <Text maxW="3xl" mx="auto" mb={10}>
                Descubra como a plataforma RecruitMe está gerando resultados reais para Talentos, Empresas e Comunidades. Leia nossos cases de sucesso, depoimentos e insights sobre o poder de uma conexão bem feita.
            </Text>
            
            {/* Bloco de Citação / Testemunho (Mantendo a credibilidade) */}
            <VStack mb={12}>
                <Text fontStyle="italic" color="gray.600">
                    “O RecruitMe acelerou nosso processo de contratação em 40%, conectando-nos a talentos que jamais encontraríamos por vias tradicionais.”
                </Text>
                <Text fontWeight="bold">Mariana Leal</Text>
                <Text fontSize="sm">Head de Pessoas, Tech Solutions</Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} maxW="6xl" mx="auto">
                
                <Box>
                    <Heading size="sm">De Bootcamp à Estágio Sênior: A Jornada de João Silva com a Vagas.Tech</Heading>
                    <Text fontSize="sm" mt={2} color="gray.500">
                        Como João, recém-formado, conseguiu sua primeira vaga através de um programa de formação exclusivo anunciado na plataforma.
                    </Text>
                    <Link color="teal.500" mt={2} href="#">Ver Case</Link>
                </Box>
                
                <Box>
                    <Heading size="sm">40% de Otimização: Como a Accio Solutions Reformulou Seu Pipeline de Recrutamento</Heading>
                    <Text fontSize="sm" mt={2} color="gray.500">
                        A história de como a Accio Solutions usou as ferramentas de segmentação do RecruitMe para encontrar profissionais em nichos específicos.
                    </Text>
                    <Link color="teal.500" mt={2} href="#">Ver Case</Link>
                </Box>
                
                <Box>
                    <Heading size="sm">Multiplicando o Alcance: A Comunidade Devs-RJ e a Divulgação de 15 Eventos em 1 Mês</Heading>
                    <Text fontSize="sm" mt={2} color="gray.500">
                        Entenda como o RecruitMe se tornou o principal canal de divulgação da Devs-RJ, triplicando as inscrições em workshops.
                    </Text>
                    <Link color="teal.500" mt={2} href="#">Ver Case</Link>
                </Box>
                
            </SimpleGrid>
        </Box>
    );
};

export default BlogMarketingSection;