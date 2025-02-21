import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1492550866188-62dbe0ce1559)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Button
            size="lg"
            className="bg-primary/90 hover:bg-primary"
            asChild
          >
            <a href="#booking">
              {t('hero.cta')}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
