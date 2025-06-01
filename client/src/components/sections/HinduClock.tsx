import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface HinduTime {
  ghati: number;
  pala: number;
  vipala: number;
}

export default function HinduClock() {
  const [hinduTime, setHinduTime] = useState<HinduTime>({ ghati: 0, pala: 0, vipala: 0 });
  const { i18n } = useTranslation();

  useEffect(() => {
    const calculateHinduTime = () => {
      const now = new Date();
      const sunrise = new Date();
      sunrise.setHours(6, 0, 0); // Approximate sunrise time

      const millisSinceSunrise = now.getTime() - sunrise.getTime();

      // 1 Ghati = 24 minutes
      // 1 Pala = 24 seconds
      // 1 Vipala = 0.4 seconds

      const totalSeconds = millisSinceSunrise / 1000;
      const ghati = Math.floor(totalSeconds / (24 * 60)) % 60;
      const pala = Math.floor(totalSeconds / 24) % 60;
      const vipala = Math.floor((totalSeconds % 24) / 0.4);

      setHinduTime({ ghati, pala, vipala });
    };

    const timer = setInterval(calculateHinduTime, 400); // Update every vipala
    return () => clearInterval(timer);
  }, []);

  const currentLang = i18n.language;

  return (
    <div className="fixed bottom-4 left-36">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">
          {currentLang === 'en' ? 'Hindu Time' : 'हिंदू समय'}
        </h3>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">
            {currentLang === 'en' ? (
              `${hinduTime.ghati} Ghati ${hinduTime.pala} Pala ${hinduTime.vipala} Vipala`
            ) : (
              `${hinduTime.ghati} घटी ${hinduTime.pala} पल ${hinduTime.vipala} विपल`
            )}
          </span>
        </div>
      </div>
    </div>
  );
}