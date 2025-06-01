import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Booking() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = async (amount: number, itemName: string) => {
    try {
      alert(
        t('booking.payment_contact', {
          amount: amount,
          itemName: itemName
        })
      );
      handleSubmit();
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your booking logic here
    alert(t('booking.success'));
  };

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
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">
                    {i18n.language === 'hi' ? 'सेवाएं और शुल्क' : 'Services & Fees'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(500, 'Energy Healing Session')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'ऊर्जा उपचार सत्र' : 'Energy Healing Session'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '60 मिनट का व्यक्तिगत सत्र' : '60 minutes personal session'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹500</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(800, 'Chakra Balancing')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'चक्र संतुलन' : 'Chakra Balancing'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '90 मिनट का गहन उपचार' : '90 minutes intensive healing'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹800</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(300, 'Distance Healing')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'दूरस्थ उपचार' : 'Distance Healing'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '30 मिनट का दूरस्थ सत्र' : '30 minutes remote session'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹300</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(1200, 'Complete Healing Package')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'संपूर्ण उपचार पैकेज' : 'Complete Healing Package'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '3 सत्रों का संयोजन' : 'Combination of 3 sessions'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹1200</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">
                      {i18n.language === 'hi'
                        ? 'अपॉइंटमेंट की जानकारी भरें'
                        : 'Fill Appointment Details'}
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">
                            {i18n.language === 'hi' ? 'नाम' : 'Name'} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका नाम' : 'Your name'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">
                            {i18n.language === 'hi' ? 'ईमेल' : 'Email'} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका ईमेल' : 'Your email'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">
                            {i18n.language === 'hi' ? 'फोन नंबर' : 'Phone Number'} *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका फोन नंबर' : 'Your phone number'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="date">
                            {i18n.language === 'hi' ? 'तारीख' : 'Date'}
                          </Label>
                          <Input
                            id="date"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message">
                          {i18n.language === 'hi' ? 'संदेश' : 'Message'}
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={i18n.language === 'hi'
                            ? 'कोई विशेष बात या समस्या के बारे में बताएं'
                            : 'Tell us about any specific concerns or issues'}
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        {i18n.language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
                      </Button>
                    </form>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="foreign">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">
                    {i18n.language === 'hi' ? 'सेवाएं और शुल्क' : 'Services & Fees'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(500, 'Energy Healing Session')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'ऊर्जा उपचार सत्र' : 'Energy Healing Session'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '60 मिनट का व्यक्तिगत सत्र' : '60 minutes personal session'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹500</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(800, 'Chakra Balancing')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'चक्र संतुलन' : 'Chakra Balancing'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '90 मिनट का गहन उपचार' : '90 minutes intensive healing'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹800</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(300, 'Distance Healing')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'दूरस्थ उपचार' : 'Distance Healing'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '30 मिनट का दूरस्थ सत्र' : '30 minutes remote session'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹300</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(1200, 'Complete Healing Package')}>
                      <CardHeader className="text-center">
                        <CreditCard className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                        <CardTitle className="text-lg">
                          {i18n.language === 'hi' ? 'संपूर्ण उपचार पैकेज' : 'Complete Healing Package'}
                        </CardTitle>
                        <CardDescription>
                          {i18n.language === 'hi' ? '3 सत्रों का संयोजन' : 'Combination of 3 sessions'}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="text-2xl font-bold text-orange-600">₹1200</div>
                        <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700">
                          {i18n.language === 'hi' ? 'संपर्क करें' : 'Contact for Payment'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-center">
                      {i18n.language === 'hi'
                        ? 'अपॉइंटमेंट की जानकारी भरें'
                        : 'Fill Appointment Details'}
                    </h4>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name2">
                            {i18n.language === 'hi' ? 'नाम' : 'Name'} *
                          </Label>
                          <Input
                            id="name2"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका नाम' : 'Your name'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email2">
                            {i18n.language === 'hi' ? 'ईमेल' : 'Email'} *
                          </Label>
                          <Input
                            id="email2"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका ईमेल' : 'Your email'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone2">
                            {i18n.language === 'hi' ? 'फोन नंबर' : 'Phone Number'} *
                          </Label>
                          <Input
                            id="phone2"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={i18n.language === 'hi' ? 'आपका फोन नंबर' : 'Your phone number'}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="date2">
                            {i18n.language === 'hi' ? 'तारीख' : 'Date'}
                          </Label>
                          <Input
                            id="date2"
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="message2">
                          {i18n.language === 'hi' ? 'संदेश' : 'Message'}
                        </Label>
                        <Textarea
                          id="message2"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={i18n.language === 'hi'
                            ? 'कोई विशेष बात या समस्या के बारे में बताएं'
                            : 'Tell us about any specific concerns or issues'}
                          rows={3}
                        />
                      </div>
                      <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                        {i18n.language === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}
                      </Button>
                    </form>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}