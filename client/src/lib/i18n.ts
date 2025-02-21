import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.booking": "Book a Session",
      "nav.about": "About Us",
      "nav.testimonials": "Testimonials",
      "nav.contact": "Contact",
      
      "hero.title": "Welcome to Antariksh Life Energy Healing",
      "hero.subtitle": "Transform Your Life Through Energy Healing",
      "hero.cta": "Book a Session",

      "services.title": "Our Services",
      "services.energy": "Energy Healing",
      "services.meditation": "Guided Meditation",
      "services.chakra": "Chakra Balancing",
      "services.distance": "Distance Healing",

      "booking.title": "Book Your Session",
      "booking.indian": "For Indian Residents",
      "booking.foreign": "For International Clients",

      "about.title": "About Us",
      "about.content": "Antariksh Life Energy Healing Center is dedicated to helping you achieve balance and harmony through ancient healing practices combined with modern techniques.",

      "testimonials.title": "Client Testimonials",

      "contact.title": "Contact Us",
      "contact.address": "Address",
      "contact.email": "Email",
      "contact.phone": "Phone"
    }
  },
  hi: {
    translation: {
      "nav.home": "होम",
      "nav.services": "सेवाएं",
      "nav.booking": "सत्र बुक करें",
      "nav.about": "हमारे बारे में",
      "nav.testimonials": "प्रशंसापत्र",
      "nav.contact": "संपर्क करें",

      "hero.title": "अंतरिक्ष लाइफ एनर्जी हीलिंग में आपका स्वागत है",
      "hero.subtitle": "ऊर्जा चिकित्सा के माध्यम से अपने जीवन को बदलें",
      "hero.cta": "सत्र बुक करें",

      "services.title": "हमारी सेवाएं",
      "services.energy": "ऊर्जा चिकित्सा",
      "services.meditation": "गाइडेड मेडिटेशन",
      "services.chakra": "चक्र संतुलन",
      "services.distance": "दूरस्थ चिकित्सा",

      "booking.title": "अपना सत्र बुक करें",
      "booking.indian": "भारतीय निवासियों के लिए",
      "booking.foreign": "अंतर्राष्ट्रीय ग्राहकों के लिए",

      "about.title": "हमारे बारे में",
      "about.content": "अंतरिक्ष लाइफ एनर्जी हीलिंग सेंटर प्राचीन चिकित्सा पद्धतियों को आधुनिक तकनीकों के साथ मिलाकर आपको संतुलन और सामंजस्य प्राप्त करने में मदद करने के लिए समर्पित है।",

      "testimonials.title": "ग्राहक प्रशंसापत्र",

      "contact.title": "संपर्क करें",
      "contact.address": "पता",
      "contact.email": "ईमेल",
      "contact.phone": "फोन"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
