import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';
import { useState } from 'react';
import { CorporateSettings } from '@/types/test';

interface SettingsDialogProps {
  open: boolean;
  onClose: () => void;
  settings: CorporateSettings;
  onSave: (settings: CorporateSettings) => void;
}

export const SettingsDialog = ({ open, onClose, settings, onSave }: SettingsDialogProps) => {
  const [companyName, setCompanyName] = useState(settings.companyName);
  const [logoUrl, setLogoUrl] = useState(settings.logoUrl);

  const handleSave = () => {
    onSave({ companyName, logoUrl });
    onClose();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Corporate Settings</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label htmlFor="company-name">Company Name</Label>
            <Input
              id="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </div>

          <div className="space-y-2">
            <Label>Company Logo</Label>
            <div className="flex items-center gap-4">
              <img 
                src={logoUrl} 
                alt="Company logo preview"
                className="h-16 w-16 rounded-lg object-contain border border-border bg-background p-2"
              />
              <div className="flex-1">
                <Label htmlFor="logo-upload" className="cursor-pointer">
                  <div className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors">
                    <Upload className="h-4 w-4" />
                    <span className="text-sm">Upload Logo</span>
                  </div>
                </Label>
                <Input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleSave} className="flex-1">
              Save Changes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
