import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';
import { EmployeeTest } from '@/types/test';

interface ReportViewerProps {
  test: EmployeeTest | null;
  open: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ReportViewer = ({ test, open, onClose, onDownload }: ReportViewerProps) => {
  if (!test) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[85vh] flex flex-col">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl">
              Pharmacogenomics Report - {test.employeeName}
            </DialogTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={onDownload} className="gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto border rounded-lg bg-background p-8">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center border-b pb-6">
              <h1 className="text-3xl font-bold text-primary mb-2">GenePowerX</h1>
              <h2 className="text-xl font-semibold text-foreground">Pharmacogenomics Test Report</h2>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 bg-muted p-4 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground">Patient Name</p>
                  <p className="font-semibold">{test.employeeName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Employee ID</p>
                  <p className="font-semibold">{test.employeeId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Test Date</p>
                  <p className="font-semibold">{test.orderDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Report ID</p>
                  <p className="font-semibold">{test.id}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Executive Summary</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This pharmacogenomics test analyzes genetic variations that may affect medication response. 
                  The results help healthcare providers personalize medication selection and dosing for optimal efficacy and safety.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Drug-Gene Interactions</h3>
                <div className="space-y-3">
                  {[
                    { drug: 'Clopidogrel', gene: 'CYP2C19', result: 'Normal Metabolizer', recommendation: 'Standard dosing recommended' },
                    { drug: 'Warfarin', gene: 'CYP2C9, VKORC1', result: 'Increased Sensitivity', recommendation: 'Consider lower initial dose' },
                    { drug: 'Simvastatin', gene: 'SLCO1B1', result: 'Normal Function', recommendation: 'Standard dosing appropriate' },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-card">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{item.drug}</h4>
                        <Badge className="bg-primary text-primary-foreground">{item.result}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Gene: {item.gene}</p>
                      <p className="text-sm text-foreground">{item.recommendation}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Clinical Recommendations</h3>
                <div className="bg-secondary p-4 rounded-lg">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• Consult with healthcare provider before making any medication changes</li>
                    <li>• Share this report with all treating physicians</li>
                    <li>• Results are valid for lifetime as genetic information doesn't change</li>
                    <li>• Additional testing may be warranted for specific medications</li>
                  </ul>
                </div>
              </div>

              <div className="text-center pt-6 border-t text-xs text-muted-foreground">
                <p>This is a dummy report for demonstration purposes only.</p>
                <p className="mt-1">GenePowerX - Precision Medicine Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Badge = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}>
      {children}
    </span>
  );
};
