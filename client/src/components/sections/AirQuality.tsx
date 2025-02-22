
import React from 'react';

export default function AirQuality() {
  return (
    <div className="fixed bottom-4 right-4">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">Air Quality</h3>
        <iframe 
          src="https://waqi.info/widgets/widget/?token=YOUR_TOKEN&station=@8171" 
          width="300" 
          height="400" 
          className="border-0 rounded-lg"
          title="Air Quality Widget"
        />
      </div>
    </div>
  );
}
