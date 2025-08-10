import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, BookOpen, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            How <span className="text-primary">Spillmate</span> Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Getting started with mental health support has never been easier. 
            Our simple 3-step process connects you with compassionate care in minutes.
          </p>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                step: "01",
                icon: MessageCircle,
                title: "Start Chat",
                description: "Open a friendly conversation anytime, anywhere. No appointments needed, no judgment - just start talking when you're ready.",
                details: [
                  "Available 24/7 worldwide",
                  "No registration required",
                  "Choose your preferred language",
                  "Complete privacy guaranteed"
                ]
              },
              {
                step: "02",
                icon: Heart,
                title: "Receive Support",
                description: "Get coping strategies, emotional relief, and understanding responses. Our AI provides personalized, empathetic support.",
                details: [
                  "Evidence-based coping techniques",
                  "Emotional validation and support",
                  "Crisis intervention when needed",
                  "Personalized conversation flow"
                ]
              },
              {
                step: "03",
                icon: BookOpen,
                title: "Access Resources",
                description: "Discover self-help tools, educational materials, and resources in your language to continue your mental health journey.",
                details: [
                  "Multilingual self-help guides",
                  "Mental health educational content",
                  "Local resource recommendations",
                  "Professional referrals when appropriate"
                ]
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-gradient-card shadow-soft hover:shadow-medium transition-smooth h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold text-primary/20">{step.step}</div>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Arrow for larger screens */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Makes Spillmate Different
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach to mental health support is designed with your needs and privacy in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Instant Access",
                description: "No waiting lists, no appointments. Get support the moment you need it, whether it's 3 AM or during your lunch break."
              },
              {
                title: "Cultural Sensitivity",
                description: "Our AI understands cultural contexts and provides support that respects your background and values."
              },
              {
                title: "Progressive Conversations",
                description: "Each conversation builds on previous ones, creating a continuous support experience tailored to your journey."
              },
              {
                title: "Crisis Detection",
                description: "Advanced algorithms can detect crisis situations and provide immediate resources and emergency contacts."
              },
              {
                title: "Language Flexibility",
                description: "Switch between languages mid-conversation or express yourself in the way that feels most natural."
              },
              {
                title: "Professional Integration",
                description: "When needed, we can help connect you with local mental health professionals and services."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-card shadow-soft">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-wellness shadow-medium">
            <CardContent className="p-12 text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Experience Spillmate?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of people worldwide who have found support, understanding, and hope through Spillmate. 
                Your mental health journey starts with a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=ai.spillmate', '_blank')}
                >
                  Start Your First Chat
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = '/terms'}
                >
                  Learn About Privacy
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;