
import React from 'react';

export default function DailyPanchang() {
  return (
    <div className="fixed bottom-4 left-4">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">Daily Panchang</h3>
        <iframe 
          src="https://www.drikpanchang.com/widget/daily-panchang?geonameid=1255364" 
          width="300" 
          height="400" 
          className="border-0 rounded-lg"
          title="Daily Panchang"
        />
      </div>
    </div>
  );
}
