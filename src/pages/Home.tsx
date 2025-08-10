import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Heart, Globe, Shield, Clock, Users, Check } from 'lucide-react';
import heroImage from '@/assets/hero-support.jpg';

const Home = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Spill Your Thoughts,
                <span className="text-primary"> Spillmate Will Listen</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Spillmate offers confidential and compassionate support in your language, 24/7.
                Connect with our AI assistant for judgment-free conversations and emotional support.
                AI-powered empathetic support for your mental well-being
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=ai.spillmate"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                </a>
                <Link to="/about">
                  <Button variant="therapeutic" size="lg" className="text-lg px-8 py-6">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Diverse group of people in supportive environment"
                className="rounded-3xl shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Spillmate?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're committed to making mental health support accessible, stigma-free, and available to everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "24/7 Availability", description: "Get support whenever you need it, day or night." },
              { icon: Globe, title: "Multilingual Support", description: "Communicate in your preferred language for effective support." },
              { icon: Shield, title: "Completely Private", description: "Your conversations are confidential and secure." },
              { icon: Heart, title: "Compassionate Care", description: "Our AI provides empathetic, non-judgmental support." },
              { icon: Users, title: "Inclusive for All", description: "Welcoming for people from all backgrounds." },
              { icon: MessageCircle, title: "Crisis Support", description: "Immediate assistance with resources and emergency contacts." }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-smooth rounded-2xl">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Path to Well-being
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Select the plan that best fits your needs and start your journey to better mental health today.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Mindful Start Plan */}
            <Card className="flex flex-col border rounded-3xl p-8 bg-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold text-foreground">Mindful Start</h3>
                <p className="text-muted-foreground mt-2">For daily check-ins and basic emotional support.</p>
                <p className="text-5xl font-bold text-foreground my-8">
                  Free <span className="text-lg font-normal text-muted-foreground">/month</span>
                </p>
                <ul className="text-left space-y-4 text-muted-foreground">
                  <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />One AI-powered conversation per day</li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Access to core Spillmate AI features</li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Daily self-reflection</li>
                </ul>
              </div>
              <Button variant="outline" className="w-full mt-8 py-6 rounded-full text-lg">Get Started</Button>
            </Card>

            {/* Thrive Plus Plan */}
            <div className="relative group">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                <div className="bg-background text-primary text-sm font-semibold px-5 py-2 rounded-full border border-primary">
                  Most Popular
                </div>
              </div>
              <Card className="flex flex-col border-2 border-primary rounded-3xl p-8 h-full bg-card shadow-lg group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground">Thrive Plus</h3>
                  <p className="text-muted-foreground mt-2">Enhanced support for deeper, regular engagement.</p>
                  <p className="text-5xl font-bold text-foreground my-8">
                    $9.99 <span className="text-lg font-normal text-muted-foreground">/month</span>
                  </p>
                  <ul className="text-left space-y-4 text-muted-foreground">
                    <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />10+ AI-powered conversations per day</li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Extended Spillmate AI features</li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Emotional pattern tracking</li>
                    <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Progress monitoring</li>
                  </ul>
                </div>
                <Button variant="hero" className="w-full mt-8 py-6 rounded-full text-lg font-semibold">Get Started</Button>
              </Card>
            </div>

            {/* Empower Network Plan */}
            <Card className="flex flex-col border rounded-3xl p-8 bg-card shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
              <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-foreground">Empower Network</h3>
                  <p className="text-muted-foreground mt-2">Tailored solutions for businesses and employers.</p>
                  <p className="text-5xl font-bold text-foreground my-8">
                      Custom
                  </p>
                  <ul className="text-left space-y-4 text-muted-foreground">
                      <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Customized conversation allowances</li>
                      <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Dedicated support</li>
                      <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Platform integration options</li>
                      <li className="flex items-start"><Check className="h-6 w-6 text-primary mr-3 flex-shrink-0" />Anonymized team insights</li>
                  </ul>
              </div>
              <Button variant="outline" className="w-full mt-8 py-6 rounded-full text-lg">Contact Us</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-wellness py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground">
            Take the first step towards better mental health. You don't have to face challenges alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=ai.spillmate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg" className="text-lg px-8 py-6">
                Begin Your Chat
              </Button>
            </a>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;