'use client';

import { Box, Flex, Button, Link, Stack, HStack } from '@chakra-ui/react';
import { useUiStore } from '@/lib/store/useUiStore';
import { NAV_ITEMS } from '@/lib/constants';
import { FaCheck } from 'react-icons/fa';
import NextLink from 'next/link';

const Header = () => {
  const openRegisterModal = useUiStore((state) => state.openRegisterModal);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    // only intercept hash links for smooth scrolling, let normal links behave
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
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
          {NAV_ITEMS.map((navItem) => (
            <Link
              key={navItem.label}
              as={NextLink}
              href={navItem.href}
              onClick={handleNavClick}
              fontSize="sm"
              fontWeight="500"
              _hover={{ color: 'teal.500', textDecoration: 'none' }}
              cursor="pointer"
            >
              {navItem.label}
            </Link>
          ))}
        </Stack>
        <HStack spacing={3}>
          <Button as={NextLink} href="/login" variant="ghost" colorScheme="teal" size="sm">
            Login
          </Button>
          <Button as={NextLink} href="/signup" colorScheme="teal" size="sm">
            Registre-se agora
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;