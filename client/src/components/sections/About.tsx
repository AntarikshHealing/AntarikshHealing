import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1600019250329-376434eb49f5"
              alt="Healing Center"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('about.content')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-background rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">10+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-sm text-muted-foreground">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
