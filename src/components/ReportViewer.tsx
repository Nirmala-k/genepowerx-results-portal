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
              Metabolic Syndrome Genetic Risk Report - {test.employeeName}
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
              <h2 className="text-xl font-semibold text-foreground">Metabolic Syndrome Genetic Risk Report</h2>
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
                  This comprehensive genetic risk assessment analyzes polygenic and monogenic markers associated with metabolic syndrome components. 
                  The results provide personalized insights into disease risk, metabolic pathways, and actionable recommendations for preventive health interventions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Genetic Risk Assessment</h3>
                <div className="space-y-3">
                  {[
                    { condition: 'Coronary Artery Disease (CAD)', risk: 'Moderate Risk', score: '45%', genes: 'APOE, LPA, PCSK9' },
                    { condition: 'Type 2 Diabetes', risk: 'Low Risk', score: '18%', genes: 'TCF7L2, PPARG, KCNJ11' },
                    { condition: 'Fatty Liver/MASLD', risk: 'Elevated Risk', score: '62%', genes: 'PNPLA3, TM6SF2, GCKR' },
                    { condition: 'Dyslipidemia', risk: 'Moderate Risk', score: '38%', genes: 'APOB, LDLR, CETP' },
                    { condition: 'Obesity', risk: 'Low Risk', score: '22%', genes: 'FTO, MC4R, BDNF' },
                    { condition: 'Hypertension', risk: 'Moderate Risk', score: '41%', genes: 'AGT, ACE, CYP11B2' },
                  ].map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 bg-card">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{item.condition}</h4>
                        <Badge className={
                          item.risk === 'Elevated Risk' ? 'bg-warning text-warning-foreground' :
                          item.risk === 'Moderate Risk' ? 'bg-primary text-primary-foreground' :
                          'bg-success text-success-foreground'
                        }>{item.risk}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">Risk Score: {item.score}</p>
                      <p className="text-sm text-muted-foreground">Key Genes: {item.genes}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Metabolic Pathway Insights</h3>
                <div className="bg-secondary p-4 rounded-lg space-y-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Lipid Metabolism</h4>
                    <p className="text-sm text-muted-foreground">Genetic variants suggest moderate efficiency in lipid processing. Consider omega-3 supplementation and regular monitoring of lipid panels.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Glucose Regulation</h4>
                    <p className="text-sm text-muted-foreground">Strong genetic profile for glucose homeostasis. Maintain current lifestyle with emphasis on complex carbohydrates.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Inflammation Response</h4>
                    <p className="text-sm text-muted-foreground">Elevated inflammatory markers detected. Anti-inflammatory diet rich in polyphenols recommended.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Personalized Recommendations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-accent">🥗</span> Nutrition
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Mediterranean diet pattern</li>
                      <li>• Increase omega-3 fatty acids</li>
                      <li>• Limit saturated fats to &lt;7% calories</li>
                      <li>• Focus on low-glycemic foods</li>
                    </ul>
                  </div>
                  <div className="bg-card border rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="text-accent">🏃</span> Fitness
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 150+ min moderate aerobic activity/week</li>
                      <li>• Strength training 2-3x per week</li>
                      <li>• HIIT training beneficial for lipid profile</li>
                      <li>• Focus on cardiovascular endurance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Early Intervention Protocols</h3>
                <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
                  <ul className="space-y-2 text-sm text-foreground">
                    <li>• <strong>Immediate:</strong> Schedule comprehensive metabolic panel and liver function tests</li>
                    <li>• <strong>3 Months:</strong> Follow-up lipid panel and hepatic elastography if indicated</li>
                    <li>• <strong>6 Months:</strong> Reassess lifestyle modifications and metabolic markers</li>
                    <li>• <strong>Annually:</strong> Complete metabolic screening and genetic counseling review</li>
                    <li>• <strong>Ongoing:</strong> Work with healthcare provider for personalized prevention strategy</li>
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
