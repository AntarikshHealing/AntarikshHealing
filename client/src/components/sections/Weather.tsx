
import React from 'react';

export default function Weather() {
  return (
    <div className="fixed bottom-4 left-1/3 transform -translate-x-1/2">
      <div className="bg-transparent p-4 rounded-lg backdrop-blur-sm">
        <h3 className="text-sm font-medium mb-2 text-foreground">Weather</h3>
        <iframe 
          src="https://www.meteoblue.com/en/weather/widget/three/delhi_india_1273294?geoloc=fixed" 
          width="300" 
          height="400" 
          className="border-0 rounded-lg"
          title="Weather Widget"
        />
      </div>
    </div>
  );
}
