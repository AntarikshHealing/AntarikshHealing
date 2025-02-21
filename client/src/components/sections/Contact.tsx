import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.address'),
      content: "123 Healing Street, Mumbai, India"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.email'),
      content: "contact@antariksh.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phone'),
      content: "+91 98765 43210"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('contact.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-primary mb-4">{info.icon}</div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
