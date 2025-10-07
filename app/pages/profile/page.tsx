'use client';

import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Avatar,
  useColorModeValue,
  Card,
  CardHeader,
  CardBody,
  Stack,
  Divider,
  IconButton,
  useToast,
  Grid,
  GridItem,
  Select,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCamera, FaSave, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import UserHeader from '@/components/Layouts/UserHeader';
import Footer from '@/components/Layouts/Footer';

// Dados mockados - substituir por dados reais
const MOCK_USER_DATA = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  phone: '(11) 99999-9999',
  bio: 'Estudante de Tecnologia apaixonado por desenvolvimento web e inovação.',
  location: 'São Paulo, SP',
  education: 'Ciência da Computação - USP',
  experience: 'Estagiário em Desenvolvimento',
  skills: 'JavaScript, React, Node.js, Python',
  linkedin: 'linkedin.com/in/joaosilva',
  github: 'github.com/joaosilva',
  avatar: '',
};

const ProfilePage = () => {
  const router = useRouter();
  const toast = useToast();
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState(MOCK_USER_DATA);

  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    // TODO: Implementar salvamento real
    console.log('Saving profile:', formData);
    
    toast({
      title: 'Perfil atualizado!',
      description: 'Suas informações foram salvas com sucesso.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
    
    setIsEditing(false);
  };

  const handleAvatarChange = () => {
    // TODO: Implementar upload de foto
    toast({
      title: 'Upload de foto',
      description: 'Funcionalidade em desenvolvimento.',
      status: 'info',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <UserHeader userName={formData.name} userAvatar={formData.avatar} userEmail={formData.email} />
      
      <Container maxW="5xl" py={8}>
        {/* Back Button */}
        <Button
          leftIcon={<FaArrowLeft />}
          variant="ghost"
          mb={6}
          onClick={() => router.push('/pages/dashboard')}
        >
          Voltar ao Dashboard
        </Button>

        {/* Header */}
        <Card bg={cardBg} borderWidth="1px" borderColor={borderColor} mb={6}>
          <CardBody>
            <HStack spacing={6} align="start">
              <Box position="relative">
                <Avatar size="2xl" name={formData.name} src={formData.avatar} />
                <IconButton
                  aria-label="Alterar foto"
                  icon={<FaCamera />}
                  size="sm"
                  colorScheme="teal"
                  borderRadius="full"
                  position="absolute"
                  bottom="0"
                  right="0"
                  onClick={handleAvatarChange}
                />
              </Box>
              <VStack align="start" spacing={1} flex={1}>
                <Heading size="lg">{formData.name}</Heading>
                <Text color="gray.600">{formData.email}</Text>
                <Text color="gray.500" fontSize="sm">{formData.location}</Text>
              </VStack>
              <Button
                colorScheme="teal"
                leftIcon={<FaSave />}
                onClick={handleSave}
                isDisabled={!isEditing}
              >
                Salvar Alterações
              </Button>
            </HStack>
          </CardBody>
        </Card>

        {/* Form */}
        <Grid templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }} gap={6}>
          {/* Informações Pessoais */}
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Informações Pessoais</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Nome Completo</FormLabel>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Seu nome completo"
                    />
                  </FormControl>

                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                    <FormControl>
                      <FormLabel>E-mail</FormLabel>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Telefone</FormLabel>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(00) 00000-0000"
                      />
                    </FormControl>
                  </Grid>

                  <FormControl>
                    <FormLabel>Localização</FormLabel>
                    <Input
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      placeholder="Cidade, Estado"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Sobre mim</FormLabel>
                    <Textarea
                      value={formData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      placeholder="Conte um pouco sobre você..."
                      rows={4}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Formação Acadêmica */}
          <GridItem>
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Formação Acadêmica</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Curso e Instituição</FormLabel>
                    <Input
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      placeholder="Ex: Ciência da Computação - USP"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Nível</FormLabel>
                    <Select defaultValue="graduacao">
                      <option value="ensino-medio">Ensino Médio</option>
                      <option value="tecnico">Técnico</option>
                      <option value="graduacao">Graduação</option>
                      <option value="pos">Pós-graduação</option>
                      <option value="mestrado">Mestrado</option>
                      <option value="doutorado">Doutorado</option>
                    </Select>
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Experiência */}
          <GridItem>
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Experiência Profissional</Heading>
              </CardHeader>
              <CardBody>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Cargo Atual</FormLabel>
                    <Input
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      placeholder="Ex: Estagiário em Desenvolvimento"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Habilidades</FormLabel>
                    <Textarea
                      value={formData.skills}
                      onChange={(e) => handleInputChange('skills', e.target.value)}
                      placeholder="Separe as habilidades por vírgula"
                      rows={3}
                    />
                  </FormControl>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Redes Sociais */}
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardHeader>
                <Heading size="md">Redes Sociais</Heading>
              </CardHeader>
              <CardBody>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl>
                    <FormLabel>LinkedIn</FormLabel>
                    <Input
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange('linkedin', e.target.value)}
                      placeholder="linkedin.com/in/seuperfil"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>GitHub</FormLabel>
                    <Input
                      value={formData.github}
                      onChange={(e) => handleInputChange('github', e.target.value)}
                      placeholder="github.com/seuperfil"
                    />
                  </FormControl>
                </Grid>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>

        {/* Save Button at Bottom */}
        <Box mt={6} textAlign="right">
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<FaSave />}
            onClick={handleSave}
            isDisabled={!isEditing}
          >
            Salvar Todas as Alterações
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default ProfilePage;
