
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaTelegram 
} from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

export default function SocialMedia() {
  const { t } = useTranslation();

  const socialPlatforms = [
    {
      name: "YouTube Channel",
      icon: <FaYoutube className="h-8 w-8" />,
      description: "Watch healing videos and guided meditations",
      link: "https://youtube.com/@Antariksh-EnergyHealing",
      color: "bg-red-500",
      followers: "Subscribe for updates"
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="h-8 w-8" />,
      description: "Daily healing tips and energy insights",
      link: "https://instagram.com/pranic_antariksh",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      followers: "Follow for daily content"
    },
    {
      name: "Facebook Page",
      icon: <FaFacebook className="h-8 w-8" />,
      description: "Community updates and healing stories",
      link: "https://facebook.com/energyhealersurat",
      color: "bg-blue-600",
      followers: "Like our page"
    },
    {
      name: "WhatsApp Channel",
      icon: <SiWhatsapp className="h-8 w-8" />,
      description: "Get healing tips and announcements",
      link: "https://whatsapp.com/channel/0029Va54vqZ3QxS9JsWoKh3z",
      color: "bg-green-500",
      followers: "Follow channel"
    },
    {
      name: "WhatsApp Community",
      icon: <FaWhatsapp className="h-8 w-8" />,
      description: "Join our healing community discussions",
      link: "https://chat.whatsapp.com/ExJmM6lcKzfD08ROzQJDNx",
      color: "bg-green-600",
      followers: "Join community"
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="h-8 w-8" />,
      description: "Energy healing resources and updates",
      link: "https://t.me/energyhealingsurat",
      color: "bg-blue-500",
      followers: "Join channel"
    }
  ];

  return (
    <section id="social" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Connect With Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community across all platforms for daily healing content, tips, and spiritual guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`${platform.color} text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                    {platform.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground mb-4">{platform.description}</p>
                  <p className="text-sm text-muted-foreground mb-4">{platform.followers}</p>
                  <Button 
                    className="w-full" 
                    asChild
                  >
                    <a 
                      href={platform.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Visit {platform.name}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Stay Connected for Healing Updates</h3>
              <p className="mb-6">Get daily healing tips, meditation guides, and spiritual insights</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <a href="https://whatsapp.com/channel/0029Va54vqZ3QxS9JsWoKh3z" target="_blank" rel="noopener noreferrer">
                    Join WhatsApp Channel
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://youtube.com/@Antariksh-EnergyHealing" target="_blank" rel="noopener noreferrer">
                    Subscribe YouTube
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
