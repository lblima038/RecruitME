import { Program } from '../types';

const mockPrograms: Program[] = [
  {
    id: 'rs-bootcamp-01',
    title: 'Ignite - React/Node Bootcamp',
    companyName: 'Rocketseat',
    type: 'Bootcamp',
    deadline: '30 Nov 2025',
    participants: 1024,
    status: 'open',
    description: 'Bootcamp intensivo focado em React, Node.js e boas práticas.',
    tags: ['frontend', 'backend'],
    enrollmentEndDate: '2025-11-30',
    externalUrl: 'https://rocketseat.com.br/'
  },
  {
    id: 'dc-course-02',
    title: 'Data Science Course',
    companyName: 'DataCamp',
    type: 'Curso',
    deadline: '10 Jan 2025',
    participants: 540,
    status: 'open',
    description: 'Aprenda ciência de dados e machine learning com projetos práticos.',
    tags: ['dados'],
    enrollmentEndDate: '2025-01-10',
    externalUrl: 'https://www.datacamp.com/'
  },
  {
    id: 'nubank-intern-03',
    title: 'Internship - Software Engineer',
    companyName: 'Nubank',
    type: 'Vaga',
    deadline: '01 Dec 2024',
    participants: 0,
    status: 'open',
    description: 'Vaga de estágio em backend com foco em serviços escaláveis.',
    tags: ['backend', 'devops'],
    enrollmentEndDate: '2024-12-01',
    externalUrl: 'https://nubank.com.br/carreiras'
  },
];

export const getAllPrograms = async (): Promise<Program[]> => {
  console.log('Buscando todos os programas (mock)...');
  return new Promise((resolve) => setTimeout(() => resolve(mockPrograms), 1000));
};