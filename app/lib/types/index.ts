// lib/types/index.ts
export interface Program {
  id: string;
  title: string;
  companyName: string;
  description: string;
  tags: ('frontend' | 'backend' | 'dados' | 'devops')[];
  enrollmentEndDate: string;
}