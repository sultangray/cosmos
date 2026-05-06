import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Factory, Building2, ShieldCheck, MapPin, CheckCircle2, Hotel } from 'lucide-react';

// Image Imports
import IMG_9972 from '@/assets/IMG_9972.jpeg';
import IMG_9995 from '@/assets/IMG_9995.jpeg';
import IMG_0004 from '@/assets/IMG_0004.jpeg';
import IMG_0017 from '@/assets/IMG_0017.jpeg';
import IMG_0021 from '@/assets/IMG_0021.jpeg';
import IMG_0027_2 from '@/assets/IMG_0027 2.jpeg';
import IMG_0047 from '@/assets/IMG_0047.jpeg';
import IMG_0056_2 from '@/assets/IMG_0056 2.jpeg';
import IMG_0300 from '@/assets/IMG_0300.jpeg';
import IMG_0301 from '@/assets/IMG_0301.jpeg';

const About = () => {
  return (
    <Layout>
      {/* Hero Section - Focused on B2B / Hospitality Scale */}
      <section className="bg-accent py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Premium Hospitality Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Commercial Grade Comfort.<br /> Built for the Industry.
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cosmo Beds & Bedding Factory is a specialized commercial manufacturer dedicated to the hospitality sector. We partner with hotels, boutique guesthouses, and Airbnb hosts to deliver high-performance sleeping solutions that withstand the rigors of high-turnover environments.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We understand that in the hospitality business, a bed is an investment in your reputation. Our workshop combines industrial-strength durability with the luxury your guests demand, ensuring long-term ROI for your establishment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    View Commercial Range
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <a href="#visit-us">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    B2B Factory Tours
                    <MapPin className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img
                src={IMG_0300}
                alt="Precision manufacturing for bulk hospitality orders"
                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Resilience Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              Engineered for High-Occupancy
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src={IMG_9972}
                  alt="Industrial bed frame reinforcement for commercial use"
                  className="rounded-2xl w-full h-auto aspect-[4/3] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <ShieldCheck className="h-6 w-6 text-primary mr-3" />
                  Industrial Strength Foundations
                </h3>
                <p className="text-muted-foreground mb-4">
                  Hospitality furniture faces significantly more wear than residential sets. Our skilled artisans build every commercial base with reinforced, locally sourced timber, specifically designed to handle constant turnover without compromise.
                </p>
                <p className="text-muted-foreground">
                  By utilizing manual, meticulous assembly rather than lightweight automated lines, we provide a level of structural integrity that minimizes maintenance costs and extends the replacement cycle for your property.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_9995} alt="Bulk frame production for hospitality" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_0004} alt="Machinery for large-scale production" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_0017} alt="Commercial securing process" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <Hotel className="h-6 w-6 text-primary mr-3" />
                  Guest-Centric Support Systems
                </h3>
                <p className="text-muted-foreground mb-4">
                  Guest reviews often hinge on sleep quality. Our hospitality range features expertly engineered spring systems topped with high-density, multi-layered comfort foams that adapt to various body types, ensuring a premium experience for every visitor.
                </p>
                <p className="text-muted-foreground mb-4">
                  From orthopedic firm options for health-focused establishments to luxury pillow-tops for high-end Airbnbs, we hand-finish every unit to ensure consistent edge support and durability across your entire inventory.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Hospitality-grade high-resiliency foam</li>
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Enhanced edge-to-edge structural integrity</li>
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Anti-sag technology for long-term consistency</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={IMG_0021}
                  alt="Inventory ready for hotel distribution"
                  className="rounded-2xl w-full h-auto aspect-[4/3] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Specifications Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Built for Business, Designed for Rest</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                We provide full transparency on commercial specifications, from spring counts to foam density, ensuring your investment meets industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Our commercial range uses premium, breathable fabrics that simplify maintenance while regulating guest temperatures year-round. The "Cosmos Hospitality Supreme" line is specifically designed with heavy-duty coils and responsive foam to provide consistent comfort through thousands of use-cycles.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img src={IMG_0027_2} alt="Raw commercial-grade materials" className="rounded-xl aspect-square object-cover shadow-sm" />
                  <img src={IMG_0047} alt="High-quality stitching and fabric for hospitality" className="rounded-xl aspect-square object-cover shadow-sm" />
                </div>
              </div>
              <div className="space-y-8 bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Commercial Warranty</h4>
                    <p className="text-muted-foreground">
                      We stand behind our craftsmanship with warranties designed for the hospitality sector, covering structural integrity under constant professional use.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Direct-to-Business Pricing</h4>
                    <p className="text-muted-foreground">
                      Eliminate the middleman. By buying direct from our factory, you secure wholesale rates that allow for premium room upgrades at competitive prices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B Visit Section */}
      <section id="visit-us" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Professional Factory Consultations
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We invite property managers, owners, and procurement officers to visit our Bapsfontein facility. See our commercial production line and test our hospitality range in person.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Discuss custom branding, bulk order timelines, and delivery logistics directly with our lead craftsmen to ensure your establishment's needs are perfectly met.
                  </p>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Manufacturing Hub</h4>
                        <p className="text-xl font-bold text-foreground">147 BASHEWA ROAD</p>
                        <p className="text-lg text-muted-foreground">BASHEWA, Bapsfontein</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src={IMG_0056_2}
                    alt="Storage and logistics for commercial distribution"
                    className="rounded-2xl w-full h-64 object-cover shadow-md"
                  />
                  <img
                    src={IMG_0301}
                    alt="Precision fabric cutting for commercial orders"
                    className="rounded-2xl w-full h-64 object-cover shadow-md object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Upgrade Your Establishment?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Join the growing number of hotels and guest houses choosing Cosmo Beds for commercial-grade durability and unmatched guest comfort.
              </p>
              <Link to="/shop">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 h-auto rounded-full"
                >
                  View Commercial Catalogue
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;