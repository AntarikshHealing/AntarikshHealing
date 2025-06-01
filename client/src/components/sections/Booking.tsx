import { useState } from 'react';
import { useTranslation } from 'react-i18next';
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

  const handlePayment = async (amount: number) => {
    try {
      const options = {
        key: 'rzp_test_9WtIpBHcAFuX8p', // Test key - replace with your actual key
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Antariksh Energy Healing',
        description: 'Energy Healing Session',
        image: '/logo.png',
        handler: function (response: any) {
          alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
          handleSubmit();
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: '#ea580c'
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
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
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(500)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(800)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(300)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(1200)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      {i18n.language === 'hi'
                        ? 'या फिर पहले अपॉइंटमेंट बुक करें'
                        : 'Or book appointment first'}
                    </p>
                    <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700">
                      {t('booking.submit')}
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="foreign">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-center">
                    {i18n.language === 'hi' ? 'सेवाएं और शुल्क' : 'Services & Fees'}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(500)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(800)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(300)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => handlePayment(1200)}>
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
                          {i18n.language === 'hi' ? 'भुगतान करें' : 'Pay Now'}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-4">
                      {i18n.language === 'hi'
                        ? 'या फिर पहले अपॉइंटमेंट बुक करें'
                        : 'Or book appointment first'}
                    </p>
                    <Button type="submit" className="w-full bg-gray-600 hover:bg-gray-700">
                      {t('booking.submit')}
                    </Button>
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