
import { useState, useEffect } from 'react';
import { Calendar, Moon } from 'lucide-react';

interface HinduDate {
  tithi: string;
  specialDay?: string;
}

export default function HinduCalendar() {
  const [hinduDate, setHinduDate] = useState<HinduDate | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.vedicastrologers.com/v1/astro/tithi?lat=${latitude}&lng=${longitude}&timestamp=${Date.now()}`
        );
        const data = await response.json();

        // This is a placeholder. You'll need to replace with actual API logic
        setHinduDate({
          tithi: data.tithi || "शुक्ल पक्ष प्रतिपदा",
          specialDay: data.specialDay || "एकादशी"
        });
      } catch (error) {
        console.error('Error fetching Hindu date:', error);
        // Fallback data for display
        setHinduDate({
          tithi: "शुक्ल पक्ष प्रतिपदा",
          specialDay: "एकादशी"
        });
      }
    });
  }, []);

  if (!hinduDate) return null;

  return (
    <div className="fixed bottom-4 left-4">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">हिंदू पंचांग</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm">{hinduDate.tithi}</span>
            </div>
            {hinduDate.specialDay && (
              <div className="flex items-center gap-2">
                <Moon className="h-4 w-4 text-primary" />
                <span className="text-sm">{hinduDate.specialDay}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
