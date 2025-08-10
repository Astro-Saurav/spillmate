import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Clock, Globe, Send, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're here to help and would love to hear from you. Whether you have questions, 
            feedback, or need support, don't hesitate to reach out.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-medium">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <Send className="h-12 w-12 text-primary mx-auto" />
                    <h2 className="text-2xl font-bold text-foreground">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      We'd love to hear your thoughts, questions, or feedback.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-xl"
                        required
                      />
                    </div>
                    
                    <Input
                      name="subject"
                      placeholder="Subject (Optional)"
                      value={formData.subject}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                    
                    <Textarea
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="min-h-32 rounded-xl"
                      required
                    />
                    
                    <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-6">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-wellness shadow-soft">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <Heart className="h-12 w-12 text-primary mx-auto" />
                      <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
                      <p className="text-muted-foreground">
                        Multiple ways to connect with our supportive team.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">Email Support</h3>
                          <p className="text-muted-foreground">support@spillmate.ai</p>
                          <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">Availability</h3>
                          <p className="text-muted-foreground">24/7 Chat Support</p>
                          <p className="text-sm text-muted-foreground">Email: Mon-Fri, 9 AM - 6 PM PST</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">Multilingual Support</h3>
                          <p className="text-muted-foreground">Over 100 languages supported</p>
                          <p className="text-sm text-muted-foreground">Communicate in your preferred language</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-foreground">Global Reach</h3>
                          <p className="text-muted-foreground">Supporting users worldwide</p>
                          <p className="text-sm text-muted-foreground">Accessible from anywhere with internet</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Need Immediate Support?</h3>
                <div className="grid grid-cols-1 gap-4">
                  <Button variant="cta" size="lg" className="justify-start text-left">
                    <Heart className="mr-3 h-5 w-5" />
                    <div>
                      <div className="font-semibold">Start a Chat</div>
                      <div className="text-sm opacity-90">Get immediate support</div>
                    </div>
                  </Button>
                  
                  <Button variant="therapeutic" size="lg" className="justify-start text-left">
                    <Globe className="mr-3 h-5 w-5" />
                    <div>
                      <div className="font-semibold">Crisis Resources</div>
                      <div className="text-sm opacity-90">Emergency mental health support</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Looking for Quick Answers?
          </h2>
          <p className="text-xl text-muted-foreground">
            Check out our Help Center for frequently asked questions and immediate assistance.
          </p>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6">
            Visit Help Center
          </Button>
        </div>
      </section>

      {/* Social & Community */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero shadow-medium">
            <CardContent className="p-12 text-center space-y-8">
              <h2 className="text-3xl font-bold text-foreground">
                Join Our Community
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with others on their mental health journey and stay updated 
                with the latest resources and support opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                  Subscribe to Newsletter
                </Button>
                <Button variant="wellness" size="lg" className="text-lg px-8 py-6">
                  Follow Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;