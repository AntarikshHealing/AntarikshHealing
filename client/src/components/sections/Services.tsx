import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      title: {
        en: 'Astrology Consultation',
        hi: 'ज्योतिष परामर्श'
      },
      description: {
        en: 'Personal horoscope reading and future predictions',
        hi: 'व्यक्तिगत कुंडली पठन और भविष्य की भविष्यवाणी'
      },
      icon: '🔮'
    },
    {
      title: {
        en: 'Palmistry',
        hi: 'हस्तरेखा'
      },
      description: {
        en: 'Palm reading and life line analysis',
        hi: 'हथेली पढ़ना और जीवन रेखा विश्लेषण'
      },
      icon: '✋'
    },
    {
      title: {
        en: 'Vastu Shastra',
        hi: 'वास्तु शास्त्र'
      },
      description: {
        en: 'Home and office vastu consultation',
        hi: 'घर और कार्यालय वास्तु परामर्श'
      },
      icon: '🏠'
    },
    {
      title: {
        en: 'Spiritual Guidance',
        hi: 'आध्यात्मिक मार्गदर्शन'
      },
      description: {
        en: 'Life guidance and spiritual counseling',
        hi: 'जीवन मार्गदर्शन और आध्यात्मिक परामर्श'
      },
      icon: '🕉️'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {i18n.language === 'hi' ? 'हमारी सेवाएं' : 'Our Services'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {i18n.language === 'hi' 
              ? 'आपके जीवन की समस्याओं का समाधान पाने के लिए हमारी विशेष सेवाओं का लाभ उठाएं'
              : 'Take advantage of our special services to find solutions to your life problems'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {service.title[i18n.language as 'en' | 'hi']}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {service.description[i18n.language as 'en' | 'hi']}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;