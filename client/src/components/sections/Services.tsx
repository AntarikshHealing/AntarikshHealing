
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Brain, 
  Zap, 
  Target, 
  Moon, 
  Users, 
  Home,
  Globe,
  Star,
  Sparkles,
  ShoppingBag,
  CreditCard
} from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Pranic Healing",
      description: "Ancient energy healing technique to cleanse and energize chakras",
      price: "₹500 - ₹2000",
      duration: "45-90 mins",
      category: "Individual"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Psychological Healing",
      description: "Mental and emotional healing through energy work",
      price: "₹700 - ₹1500",
      duration: "60 mins",
      category: "Individual"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Cleansing",
      description: "Remove negative energy and blockages from body and aura",
      price: "₹400 - ₹1000",
      duration: "30-60 mins",
      category: "Individual"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Chakra Balancing",
      description: "Align and balance all seven chakras for optimal energy flow",
      price: "₹600 - ₹1200",
      duration: "45 mins",
      category: "Individual"
    },
    {
      icon: <Moon className="h-8 w-8" />,
      title: "Meditation Sessions",
      description: "Guided meditation for inner peace and spiritual growth",
      price: "₹300 - ₹800",
      duration: "30-45 mins",
      category: "Individual/Group"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Distance Healing",
      description: "Remote energy healing sessions from anywhere in the world",
      price: "₹500 - ₹1500",
      duration: "30-60 mins",
      category: "Remote"
    },
    {
      icon: <Home className="h-8 w-8" />,
      title: "House/Office Cleansing",
      description: "Energy cleansing for homes and workplaces",
      price: "₹1000 - ₹5000",
      duration: "1-3 hours",
      category: "Property"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Healing",
      description: "Healing sessions for families or groups",
      price: "₹200 - ₹500 per person",
      duration: "60-90 mins",
      category: "Group"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Advanced Healing",
      description: "Specialized healing for chronic conditions",
      price: "₹1000 - ₹3000",
      duration: "90-120 mins",
      category: "Specialized"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Spiritual Guidance",
      description: "Spiritual counseling and life guidance sessions",
      price: "₹500 - ₹1200",
      duration: "45-60 mins",
      category: "Consultation"
    }
  ];

  const packages = [
    {
      name: "Basic Package",
      sessions: "3 Sessions",
      price: "₹1200",
      savings: "Save ₹300",
      includes: ["Energy Assessment", "Chakra Balancing", "Follow-up Session"]
    },
    {
      name: "Premium Package",
      sessions: "5 Sessions",
      price: "₹2500",
      savings: "Save ₹750",
      includes: ["Complete Energy Healing", "Psychological Healing", "Meditation Training", "Home Blessing", "Ongoing Support"]
    },
    {
      name: "Complete Transformation",
      sessions: "10 Sessions",
      price: "₹4500",
      savings: "Save ₹1500",
      includes: ["Full Body Healing", "Chakra Alignment", "Aura Cleansing", "Past Life Healing", "Spiritual Guidance", "Energy Protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t('services.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete healing services for mind, body, and soul. Experience transformation through ancient energy healing techniques.
          </p>
        </motion.div>

        {/* WhatsApp Business Catalog */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600 mr-2" />
                <h3 className="text-2xl font-bold text-green-800">WhatsApp Business Catalog</h3>
              </div>
              <p className="text-green-700 mb-4">Browse our complete service catalog on WhatsApp</p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/c/916265294078" target="_blank" rel="noopener noreferrer">
                  View Catalog on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
                <h3 className="text-2xl font-bold text-blue-800">International Payment</h3>
              </div>
              <p className="text-blue-700 mb-4">For international clients - PayPal payment available</p>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-blue-600">PayPal: antarikshhealing@axl</p>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://paypal.me/antariksh369" target="_blank" rel="noopener noreferrer">
                  Pay via PayPal
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Individual Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-primary">{service.icon}</div>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Price:</span>
                      <span className="text-primary font-semibold">{service.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Package Deals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Healing Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                  <Badge variant="outline" className="w-fit mx-auto">{pkg.savings}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-6">
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="text-sm text-muted-foreground">
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" asChild>
                    <a href="#booking">Book Package</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Healing Journey?</h3>
              <p className="mb-6">Book your consultation today and experience the transformation</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="#booking">Book Session</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://wa.me/916265294078" target="_blank" rel="noopener noreferrer">
                    WhatsApp Consultation
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
