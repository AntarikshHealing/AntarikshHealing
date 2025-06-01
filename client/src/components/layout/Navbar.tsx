import { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  };

  return (
    <nav className="fixed w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Antariksh Logo"
                className="h-12 w-auto cursor-pointer"
                onClick={() => window.location.href = '/'}
              />
            </div>
            <div className="ml-10 flex items-center space-x-4">
              <span onClick={() => window.location.href = '/#home'} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {t('nav.home')}
              </span>
              <span onClick={() => window.location.href = '/#services'} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {t('nav.services')}
              </span>
              <span onClick={() => window.location.href = '/#about'} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {t('nav.about')}
              </span>
              <span onClick={() => window.location.href = '/#contact'} className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                {t('nav.contact')}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="ml-2"
            >
              <Globe className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}