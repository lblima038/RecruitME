'use client';

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
  IconButton,
  Link,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const CompanyLoginPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [businessEmail, setBusinessEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Tentativa de login empresarial:', {
      businessEmail,
      password,
      rememberMe,
    });

    // Exemplo de redirecionamento após login bem-sucedido
    router.push('/pages/company-dashboard');
  };

  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const boxBg = useColorModeValue('white', 'gray.700');

  return (
    <Box minH="100vh" bg={bgColor} py={12} px={4}>
      <Container maxW="md">
        <Box
          bg={boxBg}
          p={8}
          borderRadius="xl"
          boxShadow="xl"
        >
          {/* Header */}
          <VStack spacing={4} mb={8} textAlign="center">
            <Heading
              as="h1"
              size="xl"
              bgGradient="linear(to-r, teal.400, blue.500)"
              bgClip="text"
            >
              Login Empresarial
            </Heading>
            <Text color="gray.600" fontSize="md">
              Acesse sua conta para gerenciar programas e oportunidades
            </Text>
          </VStack>

          {/* Formulário de Login */}
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>E-mail Empresarial</FormLabel>
                <Input
                  type="email"
                  placeholder="empresa@dominio.com"
                  value={businessEmail}
                  onChange={(e) => setBusinessEmail(e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup size="lg">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowPassword(!showPassword)}
                      variant="ghost"
                      size="sm"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <HStack justify="space-between">
                <Checkbox
                  isChecked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                >
                  Lembrar-me
                </Checkbox>
                <Link
                  as={NextLink}
                  href="/pages/forgot-password"
                  color="teal.500"
                  fontSize="sm"
                  fontWeight="medium"
                >
                  Esqueceu a senha?
                </Link>
              </HStack>

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
                Entrar
              </Button>
            </Stack>
          </form>

          {/* Link para cadastro */}
          <HStack justify="center" mt={8}>
            <Text fontSize="sm" color="gray.600">
              Não tem uma conta empresarial?
            </Text>
            <Link
              as={NextLink}
              href="/pages/company-signup"
              color="teal.500"
              fontWeight="medium"
              fontSize="sm"
            >
              Criar conta
            </Link>
          </HStack>

          {/* Voltar para login de candidato */}
          <HStack justify="center" mt={4}>
            <Link
              as={NextLink}
              href="/pages/login"
              color="gray.500"
              fontSize="sm"
              textDecoration="underline"
            >
              ← Sou candidato
            </Link>
          </HStack>
        </Box>

        {/* Termos e política */}
        <Text fontSize="xs" color="gray.500" textAlign="center" mt={6}>
          Ao fazer login, você concorda com nossos{' '}
          <Link color="teal.500" href="/terms">
            Termos de Serviço
          </Link>{' '}
          e{' '}
          <Link color="teal.500" href="/privacy">
            Política de Privacidade
          </Link>
        </Text>
      </Container>
    </Box>
  );
};

export default CompanyLoginPage;
