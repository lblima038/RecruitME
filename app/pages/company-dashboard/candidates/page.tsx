'use client';

import {
  Box,
  Heading,
  Text,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useColorModeValue,
  HStack,
  InputGroup,
  InputLeftElement,
  Select,
  Badge,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

const candidates = [
  { name: 'Ana Silva', program: 'Programa de Estágio 2026', status: 'Em Análise' },
  { name: 'Bruno Costa', program: 'Bootcamp de Front-end', status: 'Aprovado' },
  { name: 'Carla Dias', program: 'Programa de Estágio 2026', status: 'Em Análise' },
  { name: 'Daniel Alves', program: 'Programa Trainee de Gestão', status: 'Rejeitado' },
  { name: 'Eduarda Lima', program: 'Bootcamp de Front-end', status: 'Aprovado' },
];

const statusColorScheme: { [key: string]: string } = {
  'Em Análise': 'yellow',
  'Aprovado': 'green',
  'Rejeitado': 'red',
};

export default function CandidatesPage() {
  const cardBg = useColorModeValue('white', 'gray.700');

  return (
    <>
      <Box mb={8}>
        <Heading as="h1" size="xl">
          Candidatos Inscritos
        </Heading>
        <Text color="gray.500">Visualize e gerencie os candidatos dos seus programas.</Text>
      </Box>

      <HStack spacing={4} mb={6}>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiSearch color="gray.300" />
          </InputLeftElement>
          <Input placeholder="Buscar por nome..." />
        </InputGroup>
        <Select placeholder="Filtrar por programa">
          <option>Programa de Estágio 2026</option>
          <option>Bootcamp de Front-end</option>
        </Select>
      </HStack>

      <TableContainer bg={cardBg} borderRadius="xl" p={4} shadow="lg">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Nome do Candidato</Th>
              <Th>Programa</Th>
              <Th>Status</Th>
            </Tr>
          </Thead>
          <Tbody>
            {candidates.map((candidate) => (
              <Tr key={candidate.name}>
                <Td>{candidate.name}</Td>
                <Td>{candidate.program}</Td>
                <Td>
                  <Badge colorScheme={statusColorScheme[candidate.status]}>
                    {candidate.status}
                  </Badge>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}