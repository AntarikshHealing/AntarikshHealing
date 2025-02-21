import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Booking() {
  const { t } = useTranslation();

  return (
    <section id="booking" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('booking.title')}</h2>
        </motion.div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <Tabs defaultValue="indian">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="indian">{t('booking.indian')}</TabsTrigger>
                <TabsTrigger value="foreign">{t('booking.foreign')}</TabsTrigger>
              </TabsList>
              <TabsContent value="indian">
                <iframe
                  src="https://forms.gle/e39Nz2kdDDbhUncGA"
                  className="w-full min-h-[600px] border-0"
                  title="Booking Form - Indian Residents"
                />
              </TabsContent>
              <TabsContent value="foreign">
                <iframe
                  src="https://forms.gle/e39Nz2kdDDbhUncGA"
                  className="w-full min-h-[600px] border-0"
                  title="Booking Form - International Clients"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
