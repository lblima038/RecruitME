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

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login attempt:', { email, password, rememberMe });
    // TODO: Implementar autenticação
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
              Bem-vindo de volta!
            </Heading>
            <Text color="gray.600" fontSize="md">
              Faça login para acessar sua conta
            </Text>
          </VStack>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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

          {/* Sign Up Link */}
          <HStack justify="center" mt={8}>
            <Text fontSize="sm" color="gray.600">
              Não tem uma conta?
            </Text>
            <Link
              as={NextLink}
              href="/pages/signup"
              color="teal.500"
              fontWeight="medium"
              fontSize="sm"
            >
              Criar conta
            </Link>
          </HStack>

          {/* Back to Home */}
          <HStack justify="center" mt={4}>
            <Link
              as={NextLink}
              href="/"
              color="gray.500"
              fontSize="sm"
              textDecoration="underline"
            >
              ← Voltar para página inicial
            </Link>
          </HStack>
        </Box>

        {/* Terms and Privacy */}
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

export default LoginPage;
