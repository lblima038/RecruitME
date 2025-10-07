'use client';

import {
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Card,
  CardHeader,
  CardBody,
  Badge,
  Flex,
  Icon,
  useColorModeValue,
  Divider,
  SimpleGrid,
  Progress,
  Tag,
  TagLabel,
  Stack,
} from '@chakra-ui/react';
import {
  FaBriefcase,
  FaCalendarAlt,
  FaBell,
  FaChartLine,
  FaBookmark,
  FaUsers,
  FaGraduationCap,
  FaRocket,
} from 'react-icons/fa';
import { useState } from 'react';
import UserHeader from '@/components/Layouts/UserHeader';
import Footer from '@/components/Layouts/Footer';

// Dados mockados - substituir por dados reais da API
const MOCK_USER = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  avatar: '',
  role: 'Estudante',
  memberSince: 'Outubro 2024',
};

const MOCK_OPPORTUNITIES = [
  {
    id: 1,
    title: 'Bootcamp Full Stack',
    company: 'TechAcademy',
    type: 'Bootcamp',
    deadline: '15 Nov 2024',
    status: 'open',
    participants: 234,
  },
  {
    id: 2,
    title: 'Estágio em Desenvolvimento',
    company: 'StartupXYZ',
    type: 'Estágio',
    deadline: '30 Out 2024',
    status: 'closing-soon',
    participants: 89,
  },
  {
    id: 3,
    title: 'Workshop de IA',
    company: 'AI Institute',
    type: 'Workshop',
    deadline: '10 Nov 2024',
    status: 'open',
    participants: 156,
  },
];

const MOCK_SAVED_PROGRAMS = [
  {
    id: 1,
    title: 'Programa Trainee Tech 2025',
    company: 'MegaCorp',
    category: 'Trainee',
    savedAt: '5 dias atrás',
  },
  {
    id: 2,
    title: 'Imersão em Data Science',
    company: 'DataLab',
    category: 'Curso',
    savedAt: '1 semana atrás',
  },
];

const MOCK_STATS = [
  { label: 'Programas Inscritos', value: 8, icon: FaBriefcase, color: 'teal' },
  { label: 'Salvos', value: 12, icon: FaBookmark, color: 'blue' },
  { label: 'Eventos Participados', value: 5, icon: FaCalendarAlt, color: 'purple' },
  { label: 'Taxa de Sucesso', value: '75%', icon: FaChartLine, color: 'green' },
];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'saved' | 'applications'>('opportunities');
  
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'green';
      case 'closing-soon':
        return 'orange';
      default:
        return 'gray';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return 'Aberto';
      case 'closing-soon':
        return 'Encerrando em breve';
      default:
        return 'Fechado';
    }
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <UserHeader userName={MOCK_USER.name} userAvatar={MOCK_USER.avatar} userEmail={MOCK_USER.email} />
      
      <Container maxW="7xl" py={8}>
        {/* Welcome Section */}
        <Box mb={8}>
          <VStack align="start" spacing={1}>
            <Heading size="lg">Olá, {MOCK_USER.name}! 👋</Heading>
            <Text color="gray.600">
              Bem-vindo ao seu painel de oportunidades
            </Text>
          </VStack>
        </Box>

        {/* Stats Cards */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          {MOCK_STATS.map((stat, index) => (
            <Card key={index} bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardBody>
                <HStack spacing={4}>
                  <Flex
                    w={12}
                    h={12}
                    bg={`${stat.color}.100`}
                    borderRadius="lg"
                    align="center"
                    justify="center"
                  >
                    <Icon as={stat.icon} color={`${stat.color}.500`} boxSize={6} />
                  </Flex>
                  <VStack align="start" spacing={0}>
                    <Text fontSize="2xl" fontWeight="bold">
                      {stat.value}
                    </Text>
                    <Text fontSize="sm" color="gray.600">
                      {stat.label}
                    </Text>
                  </VStack>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={6}>
          {/* Main Content */}
          <GridItem>
            <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
              <CardHeader>
                <HStack justify="space-between" mb={4}>
                  <Heading size="md">Oportunidades Disponíveis</Heading>
                  <Button size="sm" colorScheme="teal" leftIcon={<FaBell />}>
                    Configurar Alertas
                  </Button>
                </HStack>
                
                {/* Tabs */}
                <HStack spacing={4}>
                  <Button
                    size="sm"
                    variant={activeTab === 'opportunities' ? 'solid' : 'ghost'}
                    colorScheme="teal"
                    onClick={() => setActiveTab('opportunities')}
                  >
                    Novas Oportunidades
                  </Button>
                  <Button
                    size="sm"
                    variant={activeTab === 'applications' ? 'solid' : 'ghost'}
                    colorScheme="teal"
                    onClick={() => setActiveTab('applications')}
                  >
                    Minhas Inscrições
                  </Button>
                  <Button
                    size="sm"
                    variant={activeTab === 'saved' ? 'solid' : 'ghost'}
                    colorScheme="teal"
                    onClick={() => setActiveTab('saved')}
                  >
                    Salvos
                  </Button>
                </HStack>
              </CardHeader>

              <CardBody>
                <VStack spacing={4} align="stretch">
                  {activeTab === 'opportunities' && MOCK_OPPORTUNITIES.map((opp) => (
                    <Card key={opp.id} variant="outline" _hover={{ shadow: 'md' }} transition="all 0.2s">
                      <CardBody>
                        <HStack justify="space-between" align="start" mb={3}>
                          <VStack align="start" spacing={1} flex={1}>
                            <Heading size="sm">{opp.title}</Heading>
                            <HStack spacing={2}>
                              <Text fontSize="sm" color="gray.600">
                                {opp.company}
                              </Text>
                              <Text fontSize="sm" color="gray.400">•</Text>
                              <Badge colorScheme="purple">{opp.type}</Badge>
                            </HStack>
                          </VStack>
                          <Badge colorScheme={getStatusColor(opp.status)}>
                            {getStatusLabel(opp.status)}
                          </Badge>
                        </HStack>
                        
                        <HStack justify="space-between" mt={4}>
                          <HStack spacing={4} fontSize="sm" color="gray.600">
                            <HStack>
                              <Icon as={FaCalendarAlt} />
                              <Text>Até {opp.deadline}</Text>
                            </HStack>
                            <HStack>
                              <Icon as={FaUsers} />
                              <Text>{opp.participants} inscritos</Text>
                            </HStack>
                          </HStack>
                          <HStack spacing={2}>
                            <Button size="sm" variant="ghost" colorScheme="teal">
                              <Icon as={FaBookmark} />
                            </Button>
                            <Button size="sm" colorScheme="teal">
                              Inscrever-se
                            </Button>
                          </HStack>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}

                  {activeTab === 'saved' && MOCK_SAVED_PROGRAMS.map((program) => (
                    <Card key={program.id} variant="outline" _hover={{ shadow: 'md' }} transition="all 0.2s">
                      <CardBody>
                        <HStack justify="space-between" align="start">
                          <VStack align="start" spacing={1} flex={1}>
                            <Heading size="sm">{program.title}</Heading>
                            <HStack spacing={2}>
                              <Text fontSize="sm" color="gray.600">
                                {program.company}
                              </Text>
                              <Text fontSize="sm" color="gray.400">•</Text>
                              <Badge colorScheme="blue">{program.category}</Badge>
                            </HStack>
                            <Text fontSize="xs" color="gray.500">
                              Salvo {program.savedAt}
                            </Text>
                          </VStack>
                          <Button size="sm" colorScheme="teal">
                            Ver Detalhes
                          </Button>
                        </HStack>
                      </CardBody>
                    </Card>
                  ))}

                  {activeTab === 'applications' && (
                    <Box textAlign="center" py={8}>
                      <Icon as={FaRocket} boxSize={12} color="gray.300" mb={4} />
                      <Text color="gray.600">
                        Você ainda não tem inscrições ativas.
                      </Text>
                      <Button 
                        mt={4} 
                        colorScheme="teal" 
                        onClick={() => setActiveTab('opportunities')}
                      >
                        Explorar Oportunidades
                      </Button>
                    </Box>
                  )}
                </VStack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              {/* Profile Completion */}
              <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="sm">Complete seu Perfil</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Box>
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="sm">Progresso</Text>
                        <Text fontSize="sm" fontWeight="bold" color="teal.500">
                          65%
                        </Text>
                      </HStack>
                      <Progress value={65} colorScheme="teal" borderRadius="full" />
                    </Box>
                    <Divider />
                    <VStack align="start" spacing={2}>
                      <HStack>
                        <Icon as={FaGraduationCap} color="teal.500" />
                        <Text fontSize="sm">Adicionar formação acadêmica</Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaBriefcase} color="gray.300" />
                        <Text fontSize="sm" color="gray.500">
                          Adicionar experiência
                        </Text>
                      </HStack>
                      <HStack>
                        <Icon as={FaRocket} color="gray.300" />
                        <Text fontSize="sm" color="gray.500">
                          Definir preferências
                        </Text>
                      </HStack>
                    </VStack>
                    <Button
                        size="sm"
                        colorScheme="teal"
                        width="full"
                        onClick={() => window.location.href = '/pages/profile'}
                    >
                        Completar Perfil
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Recommended Programs */}
              <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="sm">Recomendados para Você</Heading>
                </CardHeader>
                <CardBody>
                  <VStack spacing={4} align="stretch">
                    <Box p={3} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Bootcamp JavaScript
                      </Text>
                      <Text fontSize="xs" color="gray.600" mb={2}>
                        CodeSchool • 12 semanas
                      </Text>
                      <Tag size="sm" colorScheme="teal">
                        <TagLabel>95% match</TagLabel>
                      </Tag>
                    </Box>
                    <Box p={3} borderWidth="1px" borderRadius="md" borderColor={borderColor}>
                      <Text fontSize="sm" fontWeight="bold" mb={1}>
                        Trainee Frontend
                      </Text>
                      <Text fontSize="xs" color="gray.600" mb={2}>
                        TechCorp • Presencial
                      </Text>
                      <Tag size="sm" colorScheme="blue">
                        <TagLabel>88% match</TagLabel>
                      </Tag>
                    </Box>
                    <Button size="sm" variant="link" colorScheme="teal">
                      Ver todas as recomendações →
                    </Button>
                  </VStack>
                </CardBody>
              </Card>

              {/* Quick Actions */}
              <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader>
                  <Heading size="sm">Ações Rápidas</Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing={2}>
                    <Button size="sm" variant="outline" colorScheme="teal" justifyContent="start">
                      <Icon as={FaBell} mr={2} />
                      Configurar Alertas
                    </Button>
                    <Button size="sm" variant="outline" colorScheme="teal" justifyContent="start">
                      <Icon as={FaCalendarAlt} mr={2} />
                      Meu Calendário
                    </Button>
                    <Button size="sm" variant="outline" colorScheme="teal" justifyContent="start">
                      <Icon as={FaChartLine} mr={2} />
                      Estatísticas
                    </Button>
                  </Stack>
                </CardBody>
              </Card>
            </VStack>
          </GridItem>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default DashboardPage;
