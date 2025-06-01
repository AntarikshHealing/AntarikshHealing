
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      en: "🌟 Transform your life with positive energy healing - Book your session today!",
      hi: "🌟 सकारात्मक ऊर्जा चिकित्सा से अपना जीवन बदलें - आज ही अपना सत्र बुक करें!"
    },
    {
      en: "✨ Daily meditation brings peace and clarity to your mind and soul",
      hi: "✨ दैनिक ध्यान आपके मन और आत्मा में शांति और स्पष्टता लाता है"
    },
    {
      en: "🕉️ Connect with your inner self through ancient healing practices",
      hi: "🕉️ प्राचीन चिकित्सा पद्धतियों के माध्यम से अपने अंतर्मन से जुड़ें"
    },
    {
      en: "🌸 Chakra balancing session available - Experience harmony within",
      hi: "🌸 चक्र संतुलन सत्र उपलब्ध - अंदर से सामंजस्य का अनुभव करें"
    },
    {
      en: "💫 Distance healing works across all boundaries - Try it today!",
      hi: "💫 दूरी से चिकित्सा सभी सीमाओं के पार काम करती है - आज ही कोशिश करें!"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  if (!isVisible) return null;

  const currentLang = i18n.language;
  const currentAnnouncement = announcements[currentIndex];

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex-1 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-sm font-medium">
            {currentLang === 'hi' ? currentAnnouncement.hi : currentAnnouncement.en}
          </div>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-white/20 rounded-full p-1 transition-colors"
          aria-label="Close announcement"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
