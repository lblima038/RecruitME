'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Button,
  Icon,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const programs = [
  { title: 'Programa de Estágio 2026', applicants: 152, status: 'Ativo' },
  { title: 'Bootcamp de Front-end', applicants: 89, status: 'Ativo' },
  { title: 'Programa Trainee de Gestão', applicants: 210, status: 'Encerrado' },
];

export default function DashboardHomePage() {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <>
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

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {programs.map((program, index) => (
          <Card key={index} bg={cardBg} shadow="lg" borderRadius="xl">
            <CardHeader>
              <Heading size="md">{program.title}</Heading>
            </CardHeader>
            <CardBody>
              <HStack align="stretch">
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
              </HStack>
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
}