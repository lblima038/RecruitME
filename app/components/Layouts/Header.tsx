'use client';

import { Box, Flex, Button, Link, Stack } from '@chakra-ui/react';
import { useUiStore } from '@/lib/store/useUiStore';

const Header = () => {
  const openRegisterModal = useUiStore((state) => state.openRegisterModal);

  const navItems = ['Início', 'Funcionalidades', 'Comunidades', 'Blog', 'Preço'];

  return (
    <Box as="header" p={2}>
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Box fontWeight="bold"><i className="fa-solid fa-check"></i>RecruitMe</Box>
        <Stack direction="row" spacing={6} display={{ base: 'none', md: 'flex' }}>
          {navItems.map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} fontSize="sm">
              {item}
            </Link>
          ))}
        </Stack>
        <Button
          colorScheme="teal"
          onClick={openRegisterModal}
          size="sm"
        >
          Registre-se agora
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;