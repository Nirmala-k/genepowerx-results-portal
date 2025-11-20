export interface EmployeeTest {
  id: string;
  employeeName: string;
  employeeId: string;
  orderDate: string;
  status: 'pending' | 'completed';
  reportUrl?: string;
}

export interface CorporateSettings {
  companyName: string;
  logoUrl: string;
}
