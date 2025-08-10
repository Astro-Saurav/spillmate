import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Shield, FileText, Users, Globe } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="space-y-16 py-16">
      {/* Hero Section */}
      <section className="px-4">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Shield className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Please read these terms and conditions carefully before using Spillmate. 
            Your privacy and safety are our top priorities.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card shadow-medium">
            <CardContent className="p-8">
              <ScrollArea className="h-[600px] pr-4">
                <div className="space-y-8">
                  
                  {/* Section 1 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">1. User Conduct</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1.1. Acceptable Behavior :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users are expected to engage in respectful and lawful conduct while utilizing the Spillmate platform. 
                          Any form of harassment, abuse, or misuse of the service is strictly prohibited.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1.2. Code of Conduct :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Spillmate reserves the right to establish and enforce a code of conduct. Users are required to adhere 
                          to this code, promoting a positive and supportive environment for all participants.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">1.3. Consequences for Violation :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Violation of the established code of conduct may result in consequences, including but not limited to 
                          temporary suspension or permanent termination of access to the Spillmate platform.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-therapeutic" />
                      <h2 className="text-2xl font-bold text-foreground">2. Disclaimer of Professional Therapy Services</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2.1. Not a Licensed Therapist :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users must acknowledge that Spillmate and its AI technology are not a substitute for professional 
                          therapy services or professional companionship services. The platform does not provide therapy 
                          or companionship by licensed professionals.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2.2. Basis on Data :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The AI technology utilized by Spillmate is informed by aggregated data relevant to companionship and support.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">2.3. Limitations of the Service :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Violation of the established code of conduct may result in consequences, including but not limited to 
                          temporary suspension or permanent termination of access to the Spillmate platform.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-6 w-6 text-wellness" />
                      <h2 className="text-2xl font-bold text-foreground">3. Data Privacy</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3.1. Transparency in Data Practices :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Spillmate is committed to transparency in its data practices. Users are encouraged to review our 
                          Privacy Policy to understand how personal information is collected, used, and protected.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3.2. Consent for Data Usage :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The AI technology utilized by Spillmate is informed by aggregated data relevant to companionship and support.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">3.3. Security Measures :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Spillmate implements industry-standard security measures to safeguard user data. However, users should 
                          be aware that no online platform can guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-bold text-foreground">4. Limitation of Liability</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4.1. Service Interruptions :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users acknowledge that Spillmate may experience service interruptions or technical issues beyond our control. 
                          Spillmate disclaims any liability for such interruptions and strives to resolve them promptly.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4.2. "As Is" Nature of the Service :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          The Spillmate platform is provided on an "as is" basis. While we strive for accuracy and reliability, 
                          we make no warranties, express or implied, regarding the completeness, accuracy, or suitability of the information provided.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">4.3. User Responsibility :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users are responsible for their interactions and use of the platform. Spillmate is not liable for any 
                          consequences resulting from user actions or decisions made based on the companionship provided by the AI.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-therapeutic" />
                      <h2 className="text-2xl font-bold text-foreground">5. Code of Conduct</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5.1. Establishment of Code :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Spillmate establishes a code of conduct to maintain a positive and respectful environment for all users. 
                          This code outlines expected behavior and interactions within the platform.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5.2. Adherence to Code :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users are required to adhere to the established code of conduct while using Spillmate. This includes 
                          refraining from any inappropriate behavior that violates the principles of respect, understanding, and support.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">5.3. Consequences for Violation :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Violation of the code of conduct may result in consequences, such as warnings, temporary suspension, 
                          or permanent termination of access to Spillmate. These measures are implemented to ensure a safe and constructive space for users.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Globe className="h-6 w-6 text-wellness" />
                      <h2 className="text-2xl font-bold text-foreground">6. Compliance with Local Laws</h2>
                    </div>
                    
                    <div className="space-y-3 ml-9">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">6.1. User Responsibility :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users of the Spillmate platform are expected to comply with all applicable local laws and regulations. 
                          It is the user's responsibility to ensure that their use of the platform aligns with the legal requirements of their jurisdiction.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">6.2. Consultation with Legal Professionals :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Spillmate recommends users seek advice from legal professionals in their respective jurisdictions to ensure 
                          full compliance with local laws. This includes but is not limited to any regulations related to online services, 
                          data protection, and mental health support.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">6.3. International Users :</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Users outside of India should be aware that Spillmate is developed in India, and they are responsible for 
                          understanding and complying with the laws and regulations relevant to their location.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;