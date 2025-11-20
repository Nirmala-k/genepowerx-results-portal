import { EmployeeTest } from '@/types/test';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Eye, Clock, CheckCircle2, Calendar, User } from 'lucide-react';
import { format } from 'date-fns';

interface TestCardProps {
  test: EmployeeTest;
  onViewReport: (test: EmployeeTest) => void;
  onDownloadReport: (test: EmployeeTest) => void;
}

export const TestCard = ({ test, onViewReport, onDownloadReport }: TestCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {test.employeeName}
            </CardTitle>
            <p className="text-sm text-muted-foreground">ID: {test.employeeId}</p>
          </div>
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
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Ordered: {format(new Date(test.orderDate), 'MMM dd, yyyy')}</span>
        </div>
        
        {test.status === 'completed' && (
          <div className="flex gap-2 pt-2">
            <Button 
              className="flex-1 gap-2" 
              onClick={() => onViewReport(test)}
            >
              <Eye className="h-4 w-4" />
              View Report
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => onDownloadReport(test)}
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        )}
        
        {test.status === 'pending' && (
          <div className="pt-2 text-center">
            <p className="text-sm text-muted-foreground">Processing test results...</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
