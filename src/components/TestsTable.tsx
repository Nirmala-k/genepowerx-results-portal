import { EmployeeTest } from '@/types/test';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Clock, CheckCircle2 } from 'lucide-react';
import { format } from 'date-fns';

interface TestsTableProps {
  tests: EmployeeTest[];
  onViewReport: (test: EmployeeTest) => void;
  onDownloadReport: (test: EmployeeTest) => void;
}

export const TestsTable = ({ tests, onViewReport, onDownloadReport }: TestsTableProps) => {
  return (
    <div className="rounded-lg border border-border bg-card shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-semibold">Employee ID</TableHead>
            <TableHead className="font-semibold">Employee Name</TableHead>
            <TableHead className="font-semibold">Status</TableHead>
            <TableHead className="font-semibold">Ordered On</TableHead>
            <TableHead className="text-center font-semibold">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tests.map((test) => (
            <TableRow key={test.id} className="hover:bg-muted/30 transition-colors">
              <TableCell className="font-medium">{test.employeeId}</TableCell>
              <TableCell>{test.employeeName}</TableCell>
              <TableCell>
                {test.status === 'completed' ? (
                  <Badge className="bg-success text-success-foreground gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Completed
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="gap-1">
                    <Clock className="h-3 w-3" />
                    Pending
                  </Badge>
                )}
              </TableCell>
              <TableCell>{format(new Date(test.orderDate), 'MMM dd, yyyy')}</TableCell>
              <TableCell>
                <div className="flex items-center justify-center gap-2">
                  {test.status === 'completed' ? (
                    <>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onViewReport(test)}
                        className="gap-2"
                      >
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onDownloadReport(test)}
                        className="gap-2 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Download className="h-4 w-4" />
                        Download
                      </Button>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">Processing...</span>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
