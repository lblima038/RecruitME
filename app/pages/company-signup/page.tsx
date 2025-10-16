'use client';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Link,
  HStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import NextLink from 'next/link';

export default function CompanySignup() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Empresa registrada:', {
      companyName,
      businessEmail,
      cnpj,
      website,
      password,
    });

    // Envio de dados API

    router.push('/pages/company-dashboard');
  };

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const boxBg = useColorModeValue('white', 'gray.700');

  return (
    <Box minH="100vh" bg={bgColor} py={12} px={4}>
      <Container maxW="md">
        <Box bg={boxBg} p={8} borderRadius="xl" boxShadow="xl">
          <VStack spacing={4} mb={8} textAlign="center">
            <Heading
              as="h1"
              size="xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Cadastro da Empresa
            </Heading>
            <Text color="gray.600" fontSize="md">
              Crie sua conta empresarial para divulgar oportunidades de formação
            </Text>
          </VStack>

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nome da Empresa</FormLabel>
                <Input
                  placeholder="Ex: TechCorp"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>E-mail Empresarial</FormLabel>
                <Input
                  type="email"
                  placeholder="contato@empresa.com"
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Website (opcional)</FormLabel>
                <Input
                  type="url"
                  placeholder="https://www.empresa.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>CNPJ</FormLabel>
                <Input
                  placeholder="00.000.000/0000-00"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="lg"
                w="full"
                mt={4}
                bgGradient="linear(to-r, teal.400, blue.500)"
                _hover={{
                  bgGradient: 'linear(to-r, teal.500, blue.600)',
                }}
              >
                Registrar Empresa
              </Button>
            </Stack>
          </form>

          <HStack justify="center" mt={8}>
            <Text fontSize="sm" color="gray.600">
              Já tem uma conta?
            </Text>
            <Link
              as={NextLink}
              href="/pages/company-login"
              color="teal.500"
              fontWeight="medium"
              fontSize="sm"
            >
              Fazer login
            </Link>
          </HStack>

          {/* Link para alternar para cadastro de candidato */}
          <HStack justify="center" mt={4}>
            <Link
              as={NextLink}
              href="/pages/signup"
              className="text-gray-500 text-sm underline hover:text-teal-500 transition-colors"
            >
              👉 Sou um candidato? Fazer cadastro como candidato
            </Link>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
}
