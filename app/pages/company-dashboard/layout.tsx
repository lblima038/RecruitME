'use client';

import { Box, Flex, Heading, VStack, Icon, Button, Link, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FiHome, FiBriefcase, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const cardBg = useColorModeValue('white', 'gray.700');
  const brandColor = 'teal.500';

  return (
    <Flex minH="100vh" bg={bgColor}>
      <Box
        as="nav"
        w="250px"
        bg={cardBg}
        p={5}
        display={{ base: 'none', md: 'block' }}
        boxShadow="md"
      >
        <VStack align="stretch" spacing={4}>
          <Heading as="h2" size="md" color={brandColor} mb={6}>
            RecruitME
          </Heading>
          <Link as={NextLink} href="/pages/company-dashboard" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiHome} />}>
              Início
            </Button>
          </Link>
          <Link as={NextLink} href="/pages/company-dashboard/programs" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiBriefcase} />}>
              Programas
            </Button>
          </Link>
          <Link as={NextLink} href="/pages/company-dashboard/candidates" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiUsers} />}>
              Candidatos
            </Button>
          </Link>
          <Link as={NextLink} href="/pages/company-dashboard/settings" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" leftIcon={<Icon as={FiSettings} />}>
              Configurações
            </Button>
          </Link>
          <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
            <Button w="full" justifyContent="flex-start" variant="ghost" colorScheme="red" leftIcon={<Icon as={FiLogOut} />}>
              Sair
            </Button>
          </Link>
        </VStack>
      </Box>

      <Box flex="1" p={10}>
        {children} 
      </Box>
    </Flex>
  );
}