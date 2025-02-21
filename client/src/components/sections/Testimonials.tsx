import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The energy healing sessions have transformed my life. I feel more balanced and peaceful than ever before.",
      image: "PS"
    },
    {
      name: "John Smith",
      text: "Distance healing worked wonderfully for me. I could feel the positive energy even from thousands of miles away.",
      image: "JS"
    },
    {
      name: "Amit Patel",
      text: "The chakra balancing sessions helped me overcome long-standing emotional blocks. Highly recommended!",
      image: "AP"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
        </motion.div>

        <Carousel className="max-w-xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="bg-muted">
                  <CardContent className="p-6 text-center">
                    <Avatar className="h-16 w-16 mx-auto mb-4">
                      <AvatarFallback>{testimonial.image}</AvatarFallback>
                    </Avatar>
                    <p className="text-lg mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
