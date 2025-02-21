import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Sunrise, Sunset } from 'lucide-react';

interface SunTimes {
  sunrise: string;
  sunset: string;
}

export default function SunriseSunset() {
  const [sunTimes, setSunTimes] = useState<SunTimes | null>(null);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    }, (error) => {
      console.error('Geolocation error:', error);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4">
        <Card className="w-48">
          <CardContent className="p-4">
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!sunTimes) return null;

  return (
    <div className="fixed bottom-4 right-4">
      <Card className="w-48">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <Sunrise className="h-4 w-4 text-primary" />
            <span className="text-sm">{sunTimes.sunrise}</span>
          </div>
          <div className="flex items-center justify-between">
            <Sunset className="h-4 w-4 text-primary" />
            <span className="text-sm">{sunTimes.sunset}</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
