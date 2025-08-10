import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Target } from 'lucide-react';

// Import local assets for the team and the hero section
import teamImage from '@/assets/team-about.jpg';
import sarahChenPhoto from '@/assets/2download.jpg';
import alexRodriguezPhoto from '@/assets/3download.jpg';
import mayaPatelPhoto from '@/assets/4download.jpg';

// --- IMPORTANT ---
// Ensure these logo files exist in your project at the specified path.
import justiceAiLogo from '@/assets/logos/justice-ai-logo.webp';
import affilienetLogo from '@/assets/logos/affilienet-logo.webp';
import manavRachnaLogo from '@/assets/logos/manav-rachna-logo.webp';
import goSarteLogo from '@/assets/logos/gosarte-logo.webp';
import growAgeLogo from '@/assets/logos/grow-age-logo.webp';


const About = () => {
  // Updated list of partners with their logos and descriptions
  const partners = [
    {
      name: "Justice AI",
      logo: justiceAiLogo,
      description: "Developing AI-powered organizational and advisory applications to make the justice system faster, fairer, and more accessible for all."
    },
    {
      name: "Affilienet",
      logo: affilienetLogo,
      description: "A global performance marketing partner specializing in data-driven affiliate marketing, lead generation, and brand enhancement strategies."
    },
    {
      name: "Manav Rachna",
      logo: manavRachnaLogo,
      description: "A leading educational institution dedicated to academic excellence, research, and holistic development across a wide range of disciplines."
    },
    {
      name: "GoSarte",
      logo: goSarteLogo,
      description: "A premium accessory brand specializing in high-quality, personalized and trending jewelry for men and women."
    },
    {
      name: "Grow Age",
      logo: growAgeLogo,
      description: "A full-service digital marketing agency that helps businesses grow their online presence through SEO, SMM, and strategic brand building."
    }
  ];

  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            About <span className="text-primary">Spillmate</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're on a mission to make mental health support accessible, stigma-free, and multilingual for everyone worldwide.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To make mental health support accessible, stigma-free, and multilingual for everyone worldwide.
                  We believe that emotional well-being is a fundamental right, not a privilege.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-therapeutic" />
                  <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To build a world where emotional well-being is a right, not a privilege. Where every person,
                  regardless of location, language, or circumstances, has access to compassionate mental health support.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={teamImage}
                alt="Diverse team of mental health professionals and advocates"
                className="rounded-3xl shadow-medium w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do at Spillmate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "Every interaction is rooted in empathy, understanding, and genuine care for each person's wellbeing."
              },
              {
                icon: Users,
                title: "Inclusion",
                description: "We welcome people from all backgrounds, cultures, and experiences. Mental health support should be for everyone."
              },
              {
                icon: Globe,
                title: "Accessibility",
                description: "Breaking down barriers to mental health support through technology, language support, and inclusive design."
              }
            ].map((value, index) => (
              <Card 
                key={index} 
                className="group bg-card shadow-soft transition-all duration-300 ease-in-out hover:bg-black hover:shadow-xl hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center transition-colors duration-300 group-hover:bg-white/10">
                    <value.icon className="h-10 w-10 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground transition-colors duration-300 group-hover:text-white">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed transition-colors duration-300 group-hover:text-slate-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-wellness shadow-medium">
            <CardContent className="p-12">
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed mb-6">
                "Mental health is not a destination, but a process. It's about how you drive, not where you're going."
              </blockquote>
              <p className="text-lg text-muted-foreground">
                This philosophy drives our commitment to supporting you on your journey, wherever you are.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Dedicated Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Spillmate is built by a diverse team of mental health advocates, technologists, and community builders
            who are passionate about making a positive impact on global mental health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Clinical Director",
                bio: "Licensed therapist with 15+ years experience in cross-cultural mental health support.",
                photo: sarahChenPhoto
              },
              {
                name: "Alex Rodriguez",
                role: "Technology Lead",
                bio: "AI researcher focused on ethical, empathetic technology for mental health applications.",
                photo: alexRodriguezPhoto
              },
              {
                name: "Maya Patel",
                role: "Community Outreach",
                bio: "Multilingual advocate working to bridge cultural gaps in mental health awareness.",
                photo: mayaPatelPhoto
              }
            ].map((member, index) => (
              <Card 
                key={index} 
                className="group bg-card rounded-3xl shadow-md transition-all duration-300 ease-in-out hover:bg-black hover:shadow-xl hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-10 flex flex-col items-center text-center">
                  <img
                    src={member.photo}
                    alt={`A portrait of ${member.name}`}
                    className="w-32 h-32 rounded-full object-cover mb-6 shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mt-1 transition-colors duration-300 group-hover:text-sky-400">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mt-4 text-sm transition-colors duration-300 group-hover:text-slate-300">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-muted py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We collaborate with leading organizations to expand mental health support globally.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
            {partners.map((partner, index) => (
              <Card 
                key={index} 
                className="group bg-background rounded-2xl shadow-md border border-slate-200 flex flex-col transition-all duration-300 ease-in-out hover:bg-black hover:shadow-xl hover:-translate-y-2 hover:scale-105"
              >
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="h-20 mb-4 flex items-center justify-start">
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className={`w-auto object-contain transition-all duration-300 ${
                        partner.name === 'Justice AI' ? 'max-h-16' : 'max-h-12'
                      }`}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-foreground text-left transition-colors duration-300 group-hover:text-white">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mt-2 text-left transition-colors duration-300 group-hover:text-slate-300">
                      {partner.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;