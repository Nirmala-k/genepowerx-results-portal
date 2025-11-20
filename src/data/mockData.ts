import { EmployeeTest, CorporateSettings } from '@/types/test';

export const mockTests: EmployeeTest[] = [
  {
    id: '1',
    employeeName: 'Sarah Johnson',
    employeeId: 'EMP001',
    orderDate: '2025-01-15',
    status: 'completed',
    reportUrl: '/dummy-report.pdf',
  },
  {
    id: '2',
    employeeName: 'Michael Chen',
    employeeId: 'EMP002',
    orderDate: '2025-01-18',
    status: 'pending',
  },
  {
    id: '3',
    employeeName: 'Emily Rodriguez',
    employeeId: 'EMP003',
    orderDate: '2025-01-20',
    status: 'completed',
    reportUrl: '/dummy-report.pdf',
  },
  {
    id: '4',
    employeeName: 'James Wilson',
    employeeId: 'EMP004',
    orderDate: '2025-01-22',
    status: 'pending',
  },
  {
    id: '5',
    employeeName: 'Lisa Anderson',
    employeeId: 'EMP005',
    orderDate: '2025-01-25',
    status: 'completed',
    reportUrl: '/dummy-report.pdf',
  },
];

export const mockCorporateSettings: CorporateSettings = {
  companyName: 'Corporate Client',
  logoUrl: '/placeholder.svg',
};
