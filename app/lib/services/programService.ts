import { Program } from '../types';

const mockPrograms: Program[] = [
  {
      id: '1',
      title: 'Bootcamp Full Stack',
      companyName: 'TechAcademy',
      type: 'Bootcamp',
      deadline: '15 Nov 2024',
      participants: 234,
      status: 'open',
      description: '',
      tags: [],
      enrollmentEndDate: '',
  },
  {
    id: '1',
      title: 'Bootcamp Full Stack',
      companyName: 'TechAcademy',
      type: 'Bootcamp',
      deadline: '15 Nov 2024',
      participants: 234,
      status: 'open',
      description: '',
      tags: [],
      enrollmentEndDate: '',
  },
  {
    id: '1',
      title: 'Bootcamp Full Stack',
      companyName: 'TechAcademy',
      type: 'Bootcamp',
      deadline: '15 Nov 2024',
      participants: 234,
      status: 'open',
      description: '',
      tags: [],
      enrollmentEndDate: '',
  },
];

export const getAllPrograms = async (): Promise<Program[]> => {
  console.log('Buscando todos os programas (mock)...');
  return new Promise((resolve) => setTimeout(() => resolve(mockPrograms), 1000));
};