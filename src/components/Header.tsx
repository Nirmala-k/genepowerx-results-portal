import { Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  companyName: string;
  logoUrl: string;
  onSettingsClick: () => void;
}

export const Header = ({ companyName, logoUrl, onSettingsClick }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={logoUrl} 
              alt={`${companyName} logo`}
              className="h-12 w-12 rounded-lg object-contain bg-background p-1 border border-border"
            />
            <div>
              <h1 className="text-2xl font-bold text-primary">GenePowerX</h1>
              <p className="text-sm text-muted-foreground">{companyName}</p>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={onSettingsClick}
            className="hover:bg-secondary"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};
