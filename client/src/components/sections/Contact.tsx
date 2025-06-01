import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone, MessageSquare, Users, Tv } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t('contact.address'),
      content: "240, Mandir faliyu, Village - Kasad, Olpad, Surat. 394540"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: t('contact.email'),
      content: "energyhealersurat@gmail.com",
      link: "mailto:energyhealersurat@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t('contact.phone'),
      content: "+91 6265294078",
      link: "tel:+916265294078"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "WhatsApp",
      content: "+91 6265294078",
      link: "https://wa.me/916265294078"
    },
    {
      icon: <Tv className="h-6 w-6" />,
      title: "WhatsApp Channel",
      content: "Follow our updates",
      link: "https://whatsapp.com/channel/0029Va54vqZ3QxS9JsWoKh3z"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "WhatsApp Community",
      content: "Join our community",
      link: "https://chat.whatsapp.com/ExJmM6lcKzfD08ROzQJDNx"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="text-primary mr-4">{info.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-2">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                          target={info.link.startsWith('http') ? "_blank" : undefined}
                          rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full h-[400px] rounded-lg overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0145662163776!2d72.89858767599731!3d21.147899980531396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04db38c72c623%3A0x9e39f5c4f6382bbc!2sKasad%2C%20Gujarat%20394540!5e0!3m2!1sen!2sin!4v1708552496069!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}