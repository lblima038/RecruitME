'use client';

import {
  Box,
  Flex,
  Button,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  HStack,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUser, FaSignOutAlt, FaBell, FaCheck } from 'react-icons/fa';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

interface UserHeaderProps {
  userName?: string;
  userAvatar?: string;
  userEmail?: string;
}

const UserHeader = ({ 
  userName = 'João Silva', 
  userAvatar = '',
  userEmail = 'joao.silva@email.com'
}: UserHeaderProps) => {
  const router = useRouter();
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const menuBg = useColorModeValue('white', 'gray.800');

  const handleLogout = () => {
    // TODO: Implementar lógica de logout real
    console.log('Logout');
    router.push('/');
  };

  const handleEditProfile = () => {
    router.push('/pages/profile');
  };

  return (
    <Box as="header" p={4} borderBottomWidth="1px" borderColor={borderColor} bg={menuBg}>
      <Flex justify="space-between" align="center" maxW="7xl" mx="auto">
        {/* Logo */}
        <Link as={NextLink} href="/pages/dashboard" _hover={{ textDecoration: 'none' }}>
          <Flex align="center" fontWeight="bold" color="teal.500" fontSize="xl">
            <Box as="span" display="inline-block" mr={2} verticalAlign="middle">
              <FaCheck />
            </Box>
            RecruitMe
          </Flex>
        </Link>

        {/* User Menu */}
        <HStack spacing={4}>
          {/* Notifications */}
          <Button variant="ghost" size="sm" position="relative">
            <FaBell />
            <Box
              position="absolute"
              top="8px"
              right="8px"
              w="8px"
              h="8px"
              bg="red.500"
              borderRadius="full"
            />
          </Button>

          {/* User Menu */}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              cursor="pointer"
              _hover={{ bg: useColorModeValue('gray.100', 'gray.700') }}
            >
              <HStack spacing={3}>
                <Avatar size="sm" name={userName} src={userAvatar} />
                <Box display={{ base: 'none', md: 'block' }} textAlign="left">
                  <Text fontSize="sm" fontWeight="600">
                    {userName}
                  </Text>
                  <Text fontSize="xs" color="gray.500">
                    Ver perfil
                  </Text>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList bg={menuBg}>
              <Box px={4} py={2}>
                <Text fontSize="sm" fontWeight="600">
                  {userName}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  {userEmail}
                </Text>
              </Box>
              <MenuDivider />
              <MenuItem icon={<FaUser />} onClick={handleEditProfile}>
                Meu Perfil
              </MenuItem>
              <MenuItem icon={<FaBell />}>
                Notificações
              </MenuItem>
              <MenuDivider />
              <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout} color="red.500">
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
};

export default UserHeader;
