
import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HinduClock() {
  const { i18n } = useTranslation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    const vipala = Math.floor(totalSeconds / 0.4) % 60;

    return { ghati, pala, vipala };
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(i18n.language === 'hi' ? 'hi-IN' : 'en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const { ghati, pala, vipala } = calculateHinduTime();

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {i18n.language === 'hi' ? 'हिंदू घड़ी' : 'Hindu Clock'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Modern Time */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-orange-600 mr-2" />
                <h3 className="text-xl font-semibold">
                  {i18n.language === 'hi' ? 'आधुनिक समय' : 'Modern Time'}
                </h3>
              </div>
              <div className="text-3xl font-mono font-bold text-orange-600 mb-2">
                {formatTime(time)}
              </div>
            </div>

            {/* Hindu Time */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-orange-600 mr-2" />
                <h3 className="text-xl font-semibold">
                  {i18n.language === 'hi' ? 'हिंदू समय' : 'Hindu Time'}
                </h3>
              </div>
              <div className="text-2xl font-mono font-bold text-orange-600">
                {ghati}:{pala.toString().padStart(2, '0')}:{vipala.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                {i18n.language === 'hi' ? 'घटी:पल:विपल' : 'Ghati:Pala:Vipala'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
