
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const { i18n } = useTranslation();

  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: {
        en: 'Phone',
        hi: 'फोन'
      },
      value: '+91 6265294078',
      description: {
        en: 'Call for immediate consultation',
        hi: 'तत्काल परामर्श के लिए कॉल करें'
      }
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: {
        en: 'WhatsApp',
        hi: 'व्हाट्सऐप'
      },
      value: '+91 6265294078',
      description: {
        en: 'Message us anytime',
        hi: 'किसी भी समय संदेश भेजें'
      }
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: {
        en: 'Email',
        hi: 'ईमेल'
      },
      value: 'antarikshhealing@gmail.com',
      description: {
        en: 'Send us your queries',
        hi: 'अपने प्रश्न भेजें'
      }
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: {
        en: 'Location',
        hi: 'स्थान'
      },
      value: 'India',
      description: {
        en: 'Available for online consultation',
        hi: 'ऑनलाइन परामर्श उपलब्ध'
      }
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact Us'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {i18n.language === 'hi' 
              ? 'आपके जीवन की समस्याओं का समाधान पाने के लिए आज ही संपर्क करें'
              : 'Contact us today to find solutions to your life problems'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-center text-orange-600 mb-4">
                  {method.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">
                  {method.title[i18n.language as 'en' | 'hi']}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-orange-600 mb-2">
                  {method.value}
                </p>
                <CardDescription className="text-gray-600">
                  {method.description[i18n.language as 'en' | 'hi']}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-orange-50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {i18n.language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
            </h3>
            <p className="text-gray-600 mb-6">
              {i18n.language === 'hi' 
                ? 'व्यक्तिगत परामर्श के लिए आज ही संपर्क करें और अपने जीवन की समस्याओं का समाधान पाएं'
                : 'Contact us today for personal consultation and find solutions to your life problems'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/916265294078" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                {i18n.language === 'hi' ? 'WhatsApp पर संपर्क करें' : 'Contact on WhatsApp'}
              </a>
              <a 
                href="tel:+916265294078"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-300"
              >
                {i18n.language === 'hi' ? 'फोन करें' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
