"use client";

import {
  Box, Container, Grid, GridItem, Heading, Text, VStack, HStack, Button,
  Card, CardHeader, CardBody, Badge, Flex, Icon, useColorModeValue,
  Divider, SimpleGrid, Progress, Tag, TagLabel, Stack, Skeleton
} from '@chakra-ui/react';
import { FaBriefcase, FaCalendarAlt, FaBell, FaChartLine, FaBookmark, FaUsers, FaGraduationCap, FaRocket } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Layouts e Componentes
import UserHeader from '@/components/Layouts/UserHeader';
import Footer from '@/components/Layouts/Footer';
import { OpportunityCard } from '@/components/Layouts/OportunityCard';

// Stores
import { useProgramStore } from '@/lib/store/useProgramStore';
import { useUserDashboardStore } from '@/lib/store/useUserDashboardStore';


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'opportunities' | 'saved' | 'applications'>('opportunities');
  
  // Conecta aos stores
  const { programs, isLoading: programsLoading, fetchPrograms } = useProgramStore();
  const { user, stats, savedPrograms, isLoading: userLoading, fetchDashboardData } = useUserDashboardStore();

  useEffect(() => {
    fetchPrograms();
    fetchDashboardData();
  }, [fetchPrograms, fetchDashboardData]);

  // Constantes de estilo
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Mapeamento de string para componente de ícone para os stats
  const iconMap: { [key: string]: React.ElementType } = {
    FaBriefcase, FaBookmark, FaCalendarAlt, FaChartLine,
  };

  return (
    <Box minH="100vh" bg={bgColor}>
      <UserHeader userName={user?.name} userAvatar={user?.avatar} userEmail={user?.email} />
      
      <Container maxW="7xl" py={8}>
        <Box mb={8}>
          <VStack align="start" spacing={1}>
            <Skeleton isLoaded={!userLoading} height="40px" width="300px">
              <Heading size="lg">Olá, {user?.name}! 👋</Heading>
            </Skeleton>
            <Text color="gray.600">
              Bem-vindo ao seu painel de oportunidades
            </Text>
          </VStack>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
          {userLoading ? (
            [...Array(4)].map((_, i) => <Skeleton key={i} height="100px" borderRadius="lg" />)
          ) : (
            stats.map((stat, index) => {
              const StatIcon = iconMap[stat.icon];
              return (
              <Card key={index} bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardBody>
                  <HStack spacing={4}>
                    <Flex w={12} h={12} bg={`${stat.color}.100`} borderRadius="lg" align="center" justify="center">
                      <Icon as={StatIcon} color={`${stat.color}.500`} boxSize={6} />
                    </Flex>
                    <VStack align="start" spacing={0}>
                      <Text fontSize="2xl" fontWeight="bold">{stat.value}</Text>
                      <Text fontSize="sm" color="gray.600">{stat.label}</Text>
                    </VStack>
                  </HStack>
                </CardBody>
              </Card>
            )})
          )}
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
                <HStack spacing={4}>
                  <Button size="sm" variant={activeTab === 'opportunities' ? 'solid' : 'ghost'} colorScheme="teal" onClick={() => setActiveTab('opportunities')}>Novas Oportunidades</Button>
                  <Button size="sm" variant={activeTab === 'applications' ? 'solid' : 'ghost'} colorScheme="teal" onClick={() => setActiveTab('applications')}>Minhas Inscrições</Button>
                  <Button size="sm" variant={activeTab === 'saved' ? 'solid' : 'ghost'} colorScheme="teal" onClick={() => setActiveTab('saved')}>Salvos</Button>
                </HStack>
              </CardHeader>
              <CardBody>
                <VStack spacing={4} align="stretch">
                  {activeTab === 'opportunities' && programs.map((opp) => (
                    <OpportunityCard key={opp.id} opportunity={opp} />
                  ))}
                  {programsLoading && <Text>Carregando oportunidades...</Text>}
                  {activeTab === 'saved' && savedPrograms.map((program) => (
                    <Text key={program.id}>{program.title}</Text>
                  ))}
                </VStack>
              </CardBody>
            </Card>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack spacing={6} align="stretch">
              <Card bg={cardBg} borderWidth="1px" borderColor={borderColor}>
                <CardHeader><Heading size="sm">Complete seu Perfil</Heading></CardHeader>
                <CardBody>
                  {/* ... conteúdo do card de perfil ... */}
                  <Link href="/profile" passHref>
                    <Button as="a" size="sm" colorScheme="teal" width="full">
                      Completar Perfil
                    </Button>
                  </Link>
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
