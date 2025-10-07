// app/components/Cards/OpportunityCard.tsx
'use client';

import Link from 'next/link';
import {
  Card,
  CardBody,
  HStack,
  VStack,
  Heading,
  Text,
  Badge,
  Icon,
  Button,
  Box,
} from '@chakra-ui/react';
import { FaCalendarAlt, FaUsers, FaBookmark } from 'react-icons/fa';

interface Opportunity {
    id: number | string;
    title: string;
    companyName: string;
    type: string;
    deadline: string;
    status: 'open' | 'closing-soon' | string;
    participants: number;
}

interface OpportunityCardProps {
    opportunity: Opportunity;
}

const getStatusColor = (status: string) => {
    if (status === 'closing-soon') return 'orange';
    if (status === 'open') return 'green';
    return 'gray';
};

const getStatusLabel = (status: string) => {
    if (status === 'closing-soon') return 'Encerrando em Breve';
    if (status === 'open') return 'Aberto';
    return 'Fechado';
};

export const OpportunityCard = ({ opportunity }: OpportunityCardProps) => {
    const isClosed = getStatusLabel(opportunity.status) === 'Fechado';

    const cardContent = (
        <Card
        variant="outline"
        _hover={!isClosed ? { shadow: 'md', cursor: 'pointer', borderColor: 'teal.400' } : {}}
        transition="all 0.2s"
        width="100%"
        opacity={isClosed ? 0.6 : 1}
        >
        <CardBody>
            <HStack justify="space-between" align="start" mb={3}>
            <VStack align="start" spacing={1} flex={1}>
                <Heading size="sm">{opportunity.title}</Heading>
                <HStack spacing={2} wrap="wrap">
                <Text fontSize="sm" color="gray.600">{opportunity.companyName}</Text> {/* CORRIGIDO PARA USAR companyName */}
                <Text fontSize="sm" color="gray.400" display={{ base: 'none', md: 'block' }}>•</Text>
                <Badge colorScheme="purple">{opportunity.type}</Badge>
                </HStack>
            </VStack>
            <Badge colorScheme={getStatusColor(opportunity.status)}>
                {getStatusLabel(opportunity.status)}
            </Badge>
            </HStack>
            <HStack justify="space-between" mt={4}>
            <HStack spacing={4} fontSize="sm" color="gray.600">
                <HStack>
                <Icon as={FaCalendarAlt} />
                <Text>Até {opportunity.deadline}</Text>
                </HStack>
                <HStack>
                <Icon as={FaUsers} />
                <Text>{opportunity.participants} inscritos</Text>
                </HStack>
            </HStack>
            <Button isDisabled={isClosed} size="sm" colorScheme="teal" variant="solid" display={{ base: 'none', md: 'flex' }}>
                Inscrever-se
            </Button>
            </HStack>
        </CardBody>
        </Card>
    );

    if (isClosed) {
        return <Box>{cardContent}</Box>;
    }

    return (
        <Link href={`/programas/${opportunity.id}`} style={{ textDecoration: 'none' }}>
        {cardContent}
        </Link>
    );
};

export default OpportunityCard; 