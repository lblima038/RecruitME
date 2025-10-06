'use client';

import { Box, Flex, Button, Link, Stack } from '@chakra-ui/react';
import { useUiStore } from '@/lib/store/useUiStore';
import { NAV_ITEMS } from '@/lib/constants';
import { FaCheck } from 'react-icons/fa';

const Header = () => {
  const openRegisterModal = useUiStore((state) => state.openRegisterModal);

  return (
    <Box as="header" p={4} borderBottomWidth="1px" borderColor="gray.200">
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        <Flex align="center" fontWeight="bold" color="teal.500">
          <Box as="span" display="inline-block" mr={2} verticalAlign="middle">
            <FaCheck />
          </Box>
          RecruitMe
        </Flex>
        <Stack direction="row" spacing={8} display={{ base: 'none', md: 'flex' }}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} fontSize="sm" fontWeight="500">
              {item.label}
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