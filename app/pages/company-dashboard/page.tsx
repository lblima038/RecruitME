'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  Icon,
  HStack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import {
  FiHome,
  FiBriefcase,
  FiUsers,
  FiSettings,
  FiPlus,
  FiLogOut,
} from 'react-icons/fi';

const CompanyDashboardPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const brandColor = 'teal.500';

  // Dados de exemplo para os cards
  const programs = [
    {
      title: 'Programa de Estágio 2026',
      applicants: 152,
      status: 'Ativo',
    },
    {
      title: 'Bootcamp de Front-end',
      applicants: 89,
      status: 'Ativo',
    },
    {
      title: 'Programa Trainee de Gestão',
      applicants: 210,
      status: 'Encerrado',
    },
  ];

  return (
    <Flex minH="100vh" bg={bgColor}>
      {/* Sidebar de Navegação */}
      <Box
        as="nav"
        w="250px"
        bg={cardBg}
        p={5}
        display={{ base: 'none', md: 'block' }}
        boxShadow="md"
      >
        <VStack align="stretch" spacing={4}>
          <Heading as="h2" size="md" color={brandColor} mb={6}>
            RecruitME
          </Heading>
          <Link as={NextLink} href="/pages/company-dashboard" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiHome} />}>
              Início
            </Button>
          </Link>
          <Link as={NextLink} href="#" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiBriefcase} />}>
              Programas
            </Button>
          </Link>
          <Link as={NextLink} href="#" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiUsers} />}>
              Candidatos
            </Button>
          </Link>
          <Link as={NextLink} href="#" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiSettings} />}>
              Configurações
            </Button>
          </Link>
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" colorScheme="red" leftIcon={<Icon as={FiLogOut} />}>
              Sair
            </Button>
          </Link>
        </VStack>
      </Box>

      {/* Conteúdo Principal */}
      <Box flex="1" p={10}>
        <Flex justify="space-between" align="center" mb={8}>
          <Box>
            <Heading as="h1" size="xl">
              Painel da Empresa
            </Heading>
            <Text color="gray.500">Bem-vindo(a) de volta, TechCorp!</Text>
          </Box>
          <Button
            leftIcon={<Icon as={FiPlus} />}
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, blue.500)"
            _hover={{ bgGradient: 'linear(to-r, teal.500, blue.600)' }}
          >
            Criar Novo Programa
          </Button>
        </Flex>

        {/* Grade de Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {programs.map((program, index) => (
            <Card key={index} bg={cardBg} shadow="lg" borderRadius="xl">
              <CardHeader>
                <Heading size="md">{program.title}</Heading>
              </CardHeader>
              <CardBody>
                <VStack align="stretch">
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Candidatos Inscritos:</Text>
                    <Text>{program.applicants}</Text>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontWeight="bold">Status:</Text>
                    <Text color={program.status === 'Ativo' ? 'green.400' : 'red.400'}>
                      {program.status}
                    </Text>
                  </HStack>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default CompanyDashboardPage;