import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Antariksh</h3>
            <p className="text-sm opacity-80">
              {t('about.content')}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <address className="text-sm opacity-80 not-italic">
              <p>{t('contact.address')}: 123 Healing Street</p>
              <p>{t('contact.email')}: contact@antariksh.com</p>
              <p>{t('contact.phone')}: +91 98765 43210</p>
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
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm opacity-60">
            © {new Date().getFullYear()} Antariksh Life Energy Healing Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
