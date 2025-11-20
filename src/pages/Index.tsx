import { useState } from 'react';
import { Header } from '@/components/Header';
import { TestCard } from '@/components/TestCard';
import { ReportViewer } from '@/components/ReportViewer';
import { SettingsDialog } from '@/components/SettingsDialog';
import { mockTests, mockCorporateSettings } from '@/data/mockData';
import { EmployeeTest, CorporateSettings } from '@/types/test';
import { useToast } from '@/hooks/use-toast';
import { FileText, Users } from 'lucide-react';

const Index = () => {
  const [tests, setTests] = useState<EmployeeTest[]>(mockTests);
  const [settings, setSettings] = useState<CorporateSettings>(mockCorporateSettings);
  const [selectedTest, setSelectedTest] = useState<EmployeeTest | null>(null);
  const [showReportViewer, setShowReportViewer] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { toast } = useToast();

  const handleViewReport = (test: EmployeeTest) => {
    setSelectedTest(test);
    setShowReportViewer(true);
  };

  const handleDownloadReport = (test: EmployeeTest) => {
    toast({
      title: 'Download Started',
      description: `Downloading report for ${test.employeeName}`,
    });
    // In a real app, this would trigger an actual download
  };

  const handleSaveSettings = (newSettings: CorporateSettings) => {
    setSettings(newSettings);
    toast({
      title: 'Settings Saved',
      description: 'Corporate settings updated successfully',
    });
  };

  const completedTests = tests.filter(t => t.status === 'completed').length;
  const pendingTests = tests.filter(t => t.status === 'pending').length;

  return (
    <div className="min-h-screen bg-background">
      <Header 
        companyName={settings.companyName}
        logoUrl={settings.logoUrl}
        onSettingsClick={() => setShowSettings(true)}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Pharmacogenomics Test Dashboard
          </h2>
          <p className="text-muted-foreground">
            Manage and view employee pharmacogenomics test results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Tests</p>
                <p className="text-3xl font-bold text-foreground">{tests.length}</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Completed</p>
                <p className="text-3xl font-bold text-success">{completedTests}</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Pending</p>
                <p className="text-3xl font-bold text-warning">{pendingTests}</p>
              </div>
              <Users className="h-8 w-8 text-warning" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test) => (
            <TestCard
              key={test.id}
              test={test}
              onViewReport={handleViewReport}
              onDownloadReport={handleDownloadReport}
            />
          ))}
        </div>
      </main>

      <ReportViewer
        test={selectedTest}
        open={showReportViewer}
        onClose={() => {
          setShowReportViewer(false);
          setSelectedTest(null);
        }}
        onDownload={() => selectedTest && handleDownloadReport(selectedTest)}
      />

      <SettingsDialog
        open={showSettings}
        onClose={() => setShowSettings(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />
    </div>
  );
};

export default Index;
