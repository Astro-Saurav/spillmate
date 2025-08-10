import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Shield, Globe, Clock, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Help = () => {
  const [question, setQuestion] = useState('');
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (question && email) {
      toast({
        title: "Question submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      setQuestion('');
      setEmail('');
    }
  };

  const faqs = [
    {
      question: "Is Spillmate free to use?",
      answer: "Yes, Spillmate is completely free. We believe mental health support should be accessible to everyone, regardless of financial circumstances. Our core chat service will always remain free."
    },
    {
      question: "Is my data private and secure?",
      answer: "Absolutely. Your privacy is our top priority. All conversations are encrypted end-to-end, and we never share your personal information with third parties. You can chat anonymously without creating an account."
    },
    {
      question: "Do you offer human counseling?",
      answer: "Currently, Spillmate uses AI to provide immediate support and coping strategies. However, when appropriate, we can help connect you with licensed human counselors and local mental health services."
    },
    {
      question: "What languages do you support?",
      answer: "Spillmate supports over 100 languages and can automatically detect your preferred language. You can also switch languages during a conversation if that feels more comfortable."
    },
    {
      question: "What should I do in a mental health crisis?",
      answer: "If you're experiencing thoughts of self-harm or suicide, please contact emergency services immediately (911, 988 Suicide & Crisis Lifeline, or your local emergency number). Spillmate can provide crisis resources, but immediate professional help is essential in crisis situations."
    },
    {
      question: "Can I use Spillmate on my phone?",
      answer: "Yes! You can use Spillmate through your mobile browser, and we also have a dedicated Android app available on Google Play. An iOS app is coming soon."
    },
    {
      question: "How does the AI understand mental health?",
      answer: "Our AI is trained on evidence-based mental health practices and supervised by licensed mental health professionals. It uses techniques from cognitive behavioral therapy (CBT), mindfulness, and other proven approaches."
    },
    {
      question: "Can I save my conversations?",
      answer: "For privacy reasons, conversations are not automatically saved. However, you can request a summary of helpful strategies and resources discussed during your chat."
    }
  ];

  const resources = [
    {
      icon: Phone,
      title: "Crisis Support",
      description: "Immediate help for mental health emergencies",
      items: [
        "988 Suicide & Crisis Lifeline (US)",
        "Crisis Text Line: Text HOME to 741741",
        "International Association for Suicide Prevention"
      ]
    },
    {
      icon: MessageCircle,
      title: "Self-Guided Care",
      description: "Tools and exercises for ongoing mental wellness",
      items: [
        "Daily mindfulness exercises",
        "Anxiety and stress management techniques",
        "Sleep hygiene and relaxation guides"
      ]
    },
    {
      icon: Globe,
      title: "Language Support",
      description: "Mental health resources in your language",
      items: [
        "Multilingual crisis hotlines",
        "Cultural-specific mental health resources",
        "Translation services for therapy"
      ]
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Help <span className="text-primary">Center</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Find answers to common questions, access crisis resources, and get the support you need. 
            We're here to help you navigate your mental health journey.
          </p>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-destructive/10 border-destructive/20">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-destructive mb-2">Mental Health Emergency?</h3>
                  <p className="text-destructive/80 mb-3">
                    If you're having thoughts of suicide or self-harm, please reach out for immediate help:
                  </p>
                  <div className="space-y-1 text-sm text-destructive/80">
                    <p>• <strong>US:</strong> Call 988 (Suicide & Crisis Lifeline)</p>
                    <p>• <strong>Text:</strong> HOME to 741741 (Crisis Text Line)</p>
                    <p>• <strong>Emergency:</strong> Call 911 or your local emergency services</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQs */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to the most common questions about Spillmate.
            </p>
          </div>

          <Card className="shadow-soft">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="px-6">
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mental Health Resources
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access curated resources and tools to support your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-card shadow-soft">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <resource.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{resource.title}</h3>
                    <p className="text-muted-foreground">{resource.description}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Question */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-wellness shadow-medium">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                <div className="space-y-4">
                  <HelpCircle className="h-16 w-16 text-primary mx-auto" />
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Still Have Questions?
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Can't find what you're looking for? Send us your question and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="text-lg py-6 rounded-xl"
                    required
                  />
                  <Textarea
                    placeholder="What would you like to know?"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="min-h-32 text-lg rounded-xl"
                    required
                  />
                  <Button type="submit" variant="cta" size="lg" className="w-full text-lg py-6">
                    Submit Question
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours. For urgent concerns, please use our chat service.
                  </p>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Access */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold text-foreground">
            Need Immediate Support?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <a
              href="https://play.google.com/store/apps/details?id=ai.spillmate"
              target="_blank"
              rel="noopener noreferrer"
            >
            <Button variant="cta" size="lg" className="text-lg px-8 py-6">
              <MessageCircle className="mr-2 h-5 w-5" />
              Start a -Chat Now
            </Button>
            </a>
            <Button variant="therapeutic" size="lg" className="text-lg px-8 py-6">
              <Clock className="mr-2 h-5 w-5" />
              Browse Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;