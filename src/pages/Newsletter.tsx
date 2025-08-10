import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Smartphone, Heart, Globe, Shield, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive our mental health updates and support tips.",
      });
      setEmail('');
    }
  };

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Stay Connected. <span className="text-primary">Feel Supported.</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join our global community and stay updated with mental health resources, 
            wellness tips, and support opportunities delivered to your inbox.
          </p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-hero shadow-medium">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <Mail className="h-16 w-16 text-primary mx-auto" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Mental Health Newsletter
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get weekly insights, coping strategies, and inspiring stories from our global community.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 text-lg py-6 rounded-xl"
                      required
                    />
                    <Button type="submit" variant="cta" size="lg" className="px-8 py-6 text-lg">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Newsletter Benefits */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You'll Receive
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our newsletter is designed to support your mental health journey with valuable, actionable content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Wellness Tips",
                description: "Evidence-based strategies for managing stress, anxiety, and improving overall mental health."
              },
              {
                icon: Globe,
                title: "Global Stories",
                description: "Inspiring stories from our community members around the world sharing their journeys."
              },
              {
                icon: Shield,
                title: "Privacy Updates",
                description: "Important updates about our privacy practices and how we protect your data."
              },
              {
                icon: Users,
                title: "Community Events",
                description: "Information about virtual support groups, webinars, and community initiatives."
              },
              {
                icon: Mail,
                title: "Resource Alerts",
                description: "Notifications about new mental health resources and tools available on our platform."
              },
              {
                icon: Smartphone,
                title: "App Updates",
                description: "Early access to new features and updates in the Spillmate mobile app."
              }
            ].map((benefit, index) => (
              <Card key={index} className="bg-card shadow-soft hover:shadow-medium transition-smooth">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Get Spillmate on Your Phone
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Take your mental health support with you wherever you go. Our mobile app provides 
                the same compassionate care with the convenience of your smartphone.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Offline Access</h3>
                    <p className="text-muted-foreground">Access previous conversations and resources even without internet.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Push Notifications</h3>
                    <p className="text-muted-foreground">Gentle reminders for self-care and wellness check-ins.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground">Enhanced Security</h3>
                    <p className="text-muted-foreground">Additional security features like biometric login protection.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href="https://play.google.com/store/apps/details?id=ai.spillmate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="cta" size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Download on Google Play
                  </Button>
                </a>
                <p className="text-sm text-muted-foreground">
                  iOS version coming soon. Join our newsletter for updates!
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-wellness rounded-3xl p-8 text-center">
                <Smartphone className="h-48 w-48 text-primary/30 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground mt-6">Spillmate Mobile</h3>
                <p className="text-muted-foreground mt-2">Mental health support in your pocket</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;