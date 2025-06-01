
import { useState, useEffect } from 'react';
import { Calendar, Moon } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HinduDate {
  tithi: {
    en: string;
    hi: string;
  };
  specialDay?: {
    en: string;
    hi: string;
  };
}

export default function HinduCalendar() {
  const [hinduDate, setHinduDate] = useState<HinduDate | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    // Local Hindu calendar calculation
    const calculateHinduDate = () => {
      const today = new Date();
      const dayOfMonth = today.getDate();
      const month = today.getMonth() + 1;
      
      // Simple tithi calculation based on lunar cycle (approximate)
      const lunarDay = Math.floor(((dayOfMonth - 1) % 30) / 2) + 1;
      const paksha = dayOfMonth <= 15 ? 'Shukla' : 'Krishna';
      
      const tithiNames = [
        { en: 'Pratipada', hi: 'प्रतिपदा' },
        { en: 'Dwitiya', hi: 'द्वितीया' },
        { en: 'Tritiya', hi: 'तृतीया' },
        { en: 'Chaturthi', hi: 'चतुर्थी' },
        { en: 'Panchami', hi: 'पंचमी' },
        { en: 'Shashthi', hi: 'षष्ठी' },
        { en: 'Saptami', hi: 'सप्तमी' },
        { en: 'Ashtami', hi: 'अष्टमी' },
        { en: 'Navami', hi: 'नवमी' },
        { en: 'Dashami', hi: 'दशमी' },
        { en: 'Ekadashi', hi: 'एकादशी' },
        { en: 'Dwadashi', hi: 'द्वादशी' },
        { en: 'Trayodashi', hi: 'त्रयोदशी' },
        { en: 'Chaturdashi', hi: 'चतुर्दशी' },
        { en: 'Purnima/Amavasya', hi: 'पूर्णिमा/अमावस्या' }
      ];

      const currentTithi = tithiNames[Math.min(lunarDay - 1, 14)];
      
      // Check for special days
      let specialDay = null;
      if (lunarDay === 11) {
        specialDay = { en: 'Ekadashi', hi: 'एकादशी' };
      } else if (lunarDay === 15 && paksha === 'Shukla') {
        specialDay = { en: 'Purnima', hi: 'पूर्णिमा' };
      } else if (lunarDay === 15 && paksha === 'Krishna') {
        specialDay = { en: 'Amavasya', hi: 'अमावस्या' };
      } else if (lunarDay === 8) {
        specialDay = { en: 'Ashtami', hi: 'अष्टमी' };
      }

      setHinduDate({
        tithi: {
          en: `${paksha} Paksha ${currentTithi.en}`,
          hi: `${paksha === 'Shukla' ? 'शुक्ल' : 'कृष्ण'} पक्ष ${currentTithi.hi}`
        },
        specialDay
      });
    };

    calculateHinduDate();
    
    // Update daily at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const timer = setTimeout(() => {
      calculateHinduDate();
      // Set up daily interval
      setInterval(calculateHinduDate, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => clearTimeout(timer);
  }, []);

  if (!hinduDate) return null;

  const currentLang = i18n.language;

  return (
    <div className="fixed bottom-4 left-4">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">
          {currentLang === 'en' ? 'Hindu Calendar' : 'हिंदू पंचांग'}
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm">{hinduDate.tithi[currentLang]}</span>
            </div>
            {hinduDate.specialDay && (
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-primary" />
                <span className="text-sm">{hinduDate.specialDay[currentLang]}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
