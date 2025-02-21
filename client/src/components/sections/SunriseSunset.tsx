import { useState, useEffect } from 'react';
import { Sunrise, Sunset } from 'lucide-react';

interface SunTimes {
  sunrise: string;
  sunset: string;
}

export default function SunriseSunset() {
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0`
        );
        const data = await response.json();

        const formatTime = (isoString: string) => {
          return new Date(isoString).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          });
        };

        setSunTimes({
          sunrise: formatTime(data.results.sunrise),
          sunset: formatTime(data.results.sunset)
        });
      } catch (error) {
        console.error('Error fetching sun times:', error);
      }
    });
  }, []);

  if (!sunTimes) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">Sunrise and Sunset</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Sunrise className="h-4 w-4 text-primary" />
              <span className="text-sm">{sunTimes.sunrise}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sunset className="h-4 w-4 text-primary" />
              <span className="text-sm">{sunTimes.sunset}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}