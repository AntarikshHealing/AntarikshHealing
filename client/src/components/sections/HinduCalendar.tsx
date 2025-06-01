
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
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.vedicastrologers.com/v1/astro/tithi?lat=${latitude}&lng=${longitude}&timestamp=${Date.now()}`
          );
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Use actual API data if available, otherwise use placeholder
          setHinduDate({
            tithi: {
              en: data.tithi?.en || "Shukla Paksha Pratipada",
              hi: data.tithi?.hi || "शुक्ल पक्ष प्रतिपदा"
            },
            specialDay: {
              en: data.specialDay?.en || "Ekadashi",
              hi: data.specialDay?.hi || "एकादशी"
            }
          });
        } catch (error) {
          console.error('Error fetching Hindu date:', error);
          // Fallback data
          setHinduDate({
            tithi: {
              en: "Shukla Paksha Pratipada",
              hi: "शुक्ल पक्ष प्रतिपदा"
            },
            specialDay: {
              en: "Ekadashi",
              hi: "एकादशी"
            }
          });
        }
      },
      (error) => {
        console.error('Geolocation error:', error);
        // Fallback data when geolocation fails
        setHinduDate({
          tithi: {
            en: "Shukla Paksha Pratipada",
            hi: "शुक्ल पक्ष प्रतिपदा"
          },
          specialDay: {
            en: "Ekadashi",
            hi: "एकादशी"
          }
        });
      }
    );
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
