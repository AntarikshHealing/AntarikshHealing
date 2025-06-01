
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
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HinduClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const { i18n } = useTranslation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('hi-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {i18n.language === 'hi' ? 'हिंदू घड़ी' : 'Hindu Clock'}
          </h2>
          <div className="inline-block bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl font-mono text-orange-600 mb-4">
              {formatTime(time)}
            </div>
            <div className="text-sm text-gray-600">
              {i18n.language === 'hi' ? 'वर्तमान समय' : 'Current Time'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HinduClock;
