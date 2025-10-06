// app/components/Layouts/Footer.tsx
'use client'; // Footer interage com Input, então é bom marcá-lo como cliente.

import { Box, Text, SimpleGrid, VStack, Link, Heading, Input, Button, Flex } from '@chakra-ui/react';
import { COMPANY_LINKS, SUPPORT_LINKS } from '@/lib/constants';
import { FaCheck } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.800" color="gray.300">
      <Box maxW="7xl" mx="auto" px={4} py={10}>
        <SimpleGrid columns={{ base: 2, md: 5 }} spacing={8}>
          
          {/* Coluna Logo */}
          <VStack align="start" gridColumn={{ base: 'span 2', md: 'span 1' }}>
             <Flex align="center" fontWeight="bold" color="white" fontSize="lg">
                {/* 👇 AQUI ESTÁ A CORREÇÃO 👇 */}
                <Box as="span" display="inline-block" mr={2}>
                  <FaCheck />
                </Box>
                RecruitMe
             </Flex>
             <Text fontSize="sm" color="gray.400" mt={2}>
                Copyright © 2025 RecruitMe. <br />
                Todos os direitos reservados.
             </Text>
          </VStack>

          <VStack align="start">
            <Text fontWeight="bold" color="white" mb={2}>Empresa</Text>
            {COMPANY_LINKS.map(link => <Link key={link.label} href={link.href} fontSize="sm" _hover={{ color: 'teal.300' }}>{link.label}</Link>)}
          </VStack>

          <VStack align="start">
            <Text fontWeight="bold" color="white" mb={2}>Suporte</Text>
            {SUPPORT_LINKS.map(link => <Link key={link.label} href={link.href} fontSize="sm" _hover={{ color: 'teal.300' }}>{link.label}</Link>)}
          </VStack>
          
          <VStack align="start" gridColumn={{ base: 'span 2', md: 'span 2' }}>
              <Text fontWeight="bold" color="white">Fique por dentro</Text>
              <Flex>
                <Input placeholder="Seu endereço de email" size="md" bg="gray.700" borderWidth={0} focusBorderColor="teal.500" />
                <Button colorScheme="teal" ml={2}>Inscrever</Button>
              </Flex>
          </VStack>

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Footer;