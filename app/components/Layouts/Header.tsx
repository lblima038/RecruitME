'use client';

import { Box, Flex, Button, Link, Stack, HStack } from '@chakra-ui/react';
import { useUiStore } from '@/lib/store/useUiStore';
import { NAV_ITEMS } from '@/lib/constants';
import { FaCheck } from 'react-icons/fa';
import NextLink from 'next/link';

const Header = () => {
  const openRegisterModal = useUiStore((state) => state.openRegisterModal);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box as="header" p={4} borderBottomWidth="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Link as={NextLink} href="/" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" fontWeight="bold" color="teal.500">
            <Box as="span" display="inline-block" mr={2} verticalAlign="middle">
              <FaCheck />
            </Box>
            RecruitMe
          </Flex>
        </Link>
        <Stack direction="row" spacing={8} display={{ base: 'none', md: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              fontSize="sm" 
              fontWeight="500"
              onClick={(e) => handleSmoothScroll(e, item.href)}
              _hover={{ color: 'teal.500', textDecoration: 'none' }}
              cursor="pointer"
            >
              {item.label}
            </Link>
          ))}
        </Stack>
        <HStack spacing={3}>
          <Button
            as={NextLink}
            href="/pages/login"
            variant="ghost"
            colorScheme="teal"
            size="sm"
          >
            Login
          </Button>
            <Button
            as={NextLink}
            href="/pages/signup"
            colorScheme="teal"
            size="sm"
            >
            Registre-se agora
            </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;