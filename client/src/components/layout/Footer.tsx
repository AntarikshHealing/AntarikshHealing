import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaFacebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <FaInstagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <FaYoutube className="w-5 h-5" />, href: "#", label: "YouTube" },
    { icon: <FaWhatsapp className="w-5 h-5" />, href: "https://wa.me/916265294078", label: "WhatsApp" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo1-removebg-preview.png" 
                alt="Antariksh Logo" 
                className="h-12 w-auto mr-2"
              />
            </div>
            <p className="text-sm opacity-80">
              {t('about.content')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <address className="text-sm opacity-80 not-italic">
              <p>{t('contact.address')}: 240, Mandir faliyu, Village - Kasad, Olpad, Surat. 394540</p>
              <p>{t('contact.email')}: energyhealersurat@gmail.com</p>
              <p>{t('contact.phone')}: +91 6265294078</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('nav.services')}</h3>
            <ul className="text-sm opacity-80">
              <li className="mb-2">{t('services.energy')}</li>
              <li className="mb-2">{t('services.meditation')}</li>
              <li className="mb-2">{t('services.chakra')}</li>
              <li>{t('services.distance')}</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} Antariksh Life Energy Healing Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}