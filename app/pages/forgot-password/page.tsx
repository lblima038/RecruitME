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
  useColorModeValue,
  Link,
  VStack,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import NextLink from 'next/link';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação de envio de e-mail
    console.log('Reset password for:', email);
    
    // Mostrar toast de sucesso
    toast({
      title: 'E-mail enviado!',
      description: 'Verifique sua caixa de entrada para redefinir sua senha.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    
    setIsSubmitted(true);
    // TODO: Implementar lógica de recuperação de senha
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
          {!isSubmitted ? (
            <>
              {/* Header */}
              <VStack spacing={4} mb={8} textAlign="center">
                <Box
                  bg="teal.100"
                  p={4}
                  borderRadius="full"
                  display="inline-flex"
                >
                  <Icon as={FaEnvelope} boxSize={8} color="teal.500" />
                </Box>
                <Heading
                  as="h1"
                  size="xl"
                  bgGradient="linear(to-r, teal.400, blue.500)"
                  bgClip="text"
                >
                  Esqueceu sua senha?
                </Heading>
                <Text color="gray.600" fontSize="md">
                  Não se preocupe! Digite seu e-mail abaixo e enviaremos um link para redefinir sua senha.
                </Text>
              </VStack>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <Stack spacing={6}>
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

                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="lg"
                    w="full"
                    bgGradient="linear(to-r, teal.400, blue.500)"
                    _hover={{
                      bgGradient: 'linear(to-r, teal.500, blue.600)',
                    }}
                  >
                    Enviar link de recuperação
                  </Button>
                </Stack>
              </form>
            </>
          ) : (
            <>
              {/* Success Message */}
              <VStack spacing={6} textAlign="center">
                <Box
                  bg="green.100"
                  p={4}
                  borderRadius="full"
                  display="inline-flex"
                >
                  <Icon as={FaEnvelope} boxSize={8} color="green.500" />
                </Box>
                <Heading
                  as="h1"
                  size="xl"
                  color="green.500"
                >
                  E-mail enviado!
                </Heading>
                <Text color="gray.600" fontSize="md">
                  Enviamos um link de recuperação para <strong>{email}</strong>.
                  Verifique sua caixa de entrada e spam.
                </Text>
                <Text color="gray.500" fontSize="sm">
                  O link expira em 1 hora.
                </Text>
                
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="link"
                  colorScheme="teal"
                  mt={4}
                >
                  Não recebeu o e-mail? Enviar novamente
                </Button>
              </VStack>
            </>
          )}

          {/* Back to Login */}
          <VStack mt={8} spacing={3}>
            <Link as={NextLink} href="/pages/login" color="teal.500" fontWeight="medium" display="flex" alignItems="center" gap={2}>
              <Icon as={FaArrowLeft} />
              Voltar para login
            </Link>
            
            <Link
              as={NextLink}
              href="/"
              color="gray.500"
              fontSize="sm"
              textDecoration="underline"
            >
              Voltar para página inicial
            </Link>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPasswordPage;
