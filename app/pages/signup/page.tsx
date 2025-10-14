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
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    
    if (!formData.acceptTerms) {
      alert('Você precisa aceitar os termos de serviço');
      return;
    }

    console.log('Sign up attempt:', formData);
    // TODO: Implementar registro real
    
  // Redirecionar para o dashboard após cadastro bem-sucedido
  router.push('/dashboard');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
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
              Criar sua conta
            </Heading>
            <Text color="gray.600" fontSize="md">
              Comece sua jornada conosco hoje
            </Text>
          </VStack>

          {/* Sign Up Form */}
          <form onSubmit={handleSignUp}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Nome completo</FormLabel>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup size="lg">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Crie uma senha forte"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
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
                <FormHelperText>
                  Mínimo de 8 caracteres com letras e números
                </FormHelperText>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Confirmar senha</FormLabel>
                <InputGroup size="lg">
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Confirme sua senha"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
                      icon={showConfirmPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      variant="ghost"
                      size="sm"
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <Checkbox
                  isChecked={formData.acceptTerms}
                  onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                >
                  <Text fontSize="sm">
                    Eu concordo com os{' '}
                    <Link color="teal.500" href="/terms">
                      Termos de Serviço
                    </Link>{' '}
                    e{' '}
                    <Link color="teal.500" href="/privacy">
                      Política de Privacidade
                    </Link>
                  </Text>
                </Checkbox>
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
                Criar conta
              </Button>
            </Stack>
          </form>

          {/* Login Link */}
          <HStack justify="center" mt={8}>
            <Text fontSize="sm" color="gray.600">
              Já tem uma conta?
            </Text>
            <Link as={NextLink} href="/login" color="teal.500" fontWeight="medium" fontSize="sm">
              Fazer login
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
      </Container>
    </Box>
  );
};

export default SignUpPage;
