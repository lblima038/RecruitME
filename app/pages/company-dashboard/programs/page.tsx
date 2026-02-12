'use client';

import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Flex,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
} from '@chakra-ui/react';
import { FiPlus } from 'react-icons/fi';

const programs = [
  { name: 'Programa de Estágio 2026', status: 'Ativo', applicants: 152 },
  { name: 'Bootcamp de Front-end', status: 'Ativo', applicants: 89 },
  { name: 'Programa Trainee de Gestão', status: 'Encerrado', applicants: 210 },
  { name: 'Vaga de Analista Jr', status: 'Pausado', applicants: 45 },
];

export default function ProgramsPage() {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <>
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Heading as="h1" size="xl">
            Meus Programas
          </Heading>
          <Text color="gray.500">Gerencie seus programas, vagas e bootcamps.</Text>
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

      <TableContainer bg={cardBg} borderRadius="xl" p={4} shadow="lg">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome do Programa</Th>
              <Th>Status</Th>
              <Th isNumeric>Inscritos</Th>
            </Tr>
          </Thead>
          <Tbody>
            {programs.map((program) => (
              <Tr key={program.name}>
                <Td>{program.name}</Td>
                <Td>
                  <Text color={program.status === 'Ativo' ? 'green.400' : 'gray.500'}>
                    {program.status}
                  </Text>
                </Td>
                <Td isNumeric>{program.applicants}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}