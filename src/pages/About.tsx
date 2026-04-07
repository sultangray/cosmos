import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Factory, Sprout, Target, MapPin, CheckCircle2 } from 'lucide-react';

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
      {/* Hero Section - Featuring the worker as the FIRST image seen */}
      <section className="bg-accent py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Story, Your Rest
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                A Home-Grown Journey,<br /> Built for Comfort.
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Cosmo Beds & Bedding Factory is more than just a mattress manufacturer; we are a dedicated team of craftsmen deeply invested in the quality of your sleep. Every stitch, every spring, and every layer of foam represents our unwavering commitment to bringing genuine comfort into your home.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We believe that a truly restful sleep stems from trust, transparency, and the reassuring knowledge that your bed was built by hand, by people who understand your family's need for durability and true relaxation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/shop">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Our Beds
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <a href="#visit-us">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Visit Our Factory
                    <MapPin className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
              <img
                src={IMG_0300}
                alt="Master craftsman sewing a mattress cover at Cosmo Beds"
                className="relative rounded-3xl w-full h-auto object-cover shadow-2xl z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Craftsmanship Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
              The Heartbeat of Our Workshop
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src={IMG_9972}
                  alt="Worker assembling a reinforced bed frame"
                  className="rounded-2xl w-full h-auto aspect-[4/3] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <Factory className="h-6 w-6 text-primary mr-3" />
                  A Foundation Built by Hands
                </h3>
                <p className="text-muted-foreground mb-4">
                  The journey of every Cosmo bed begins right here on our factory floor. Our skilled artisans carefully select, cut, and prepare durable, locally sourced timber to create a robust foundation. We don't believe in flimsy, mass-produced frames. Instead, every piece is aligned and heavily reinforced to withstand years of everyday family use.
                </p>
                <p className="text-muted-foreground">
                  This hands-on process is a direct conversation between raw, sturdy materials and our experienced workshop team. By keeping our manufacturing process manual and meticulous, we ensure a level of durability and structural integrity that automated factories simply cannot match.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_9995} alt="Sturdy wooden frames ready for assembly" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_0004} alt="Machinery and mattress assembly" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="group overflow-hidden rounded-xl shadow-md">
                <img src={IMG_0017} alt="Pneumatic tools securing a bed base" className="w-full h-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-semibold mb-4 text-foreground flex items-center">
                  <Target className="h-6 w-6 text-primary mr-3" />
                  The Art of True Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Once the sturdy base is secured, the delicate work of crafting genuine comfort begins. Our team meticulously layers high-density, multi-layered comfort foams, ensuring precise alignment over our expertly engineered spring systems. This careful calibration is the secret to a mattress that offers both cloud-like comfort and necessary spinal support.
                </p>
                <p className="text-muted-foreground mb-4">
                  We cater to all sleep preferences—whether you need firm orthopedic support for a bad back, or a plush pillow-top for luxurious lounging. Our workers, trained with years of specialized experience, hand-finish every edge and seam to prevent sagging and maximize the lifespan of your mattress.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> High-density, resilient foam layers</li>
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Edge-to-edge structural support</li>
                  <li className="flex items-center text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary mr-2" /> Breathable, premium stitched fabrics</li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={IMG_0021}
                  alt="Neatly stacked, freshly manufactured mattresses"
                  className="rounded-2xl w-full h-auto aspect-[4/3] object-cover shadow-lg hover:-translate-y-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Detail Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Sprout className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Uncompromising Quality in Every Layer</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                We believe that you deserve to know exactly what goes into the place where you spend a third of your life. From the raw coils to the luxurious final fabric, we inspect every single element.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  Notice the robust thickness of our foam rolls and the intricate details of our quilted covers. We source premium, breathable fabrics that regulate temperature, ensuring you stay cool in the summer and warm in the winter. Our "Cosmos Supreme Range" is a testament to this, combining heavy-duty coils with plush, responsive foam that adapts to your body's unique shape.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <img src={IMG_0027_2} alt="Massive rolls of high-quality foam" className="rounded-xl aspect-square object-cover shadow-sm" />
                  <img src={IMG_0047} alt="Cosmos Supreme Range details and stitching" className="rounded-xl aspect-square object-cover shadow-sm" />
                </div>
              </div>
              <div className="space-y-8 bg-background p-8 rounded-2xl shadow-sm border border-border/50">
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Authentic Care & Craft</h4>
                    <p className="text-muted-foreground">
                      We care deeply about your physical well-being. Our focus is providing the absolute perfect balance of deep support and surface comfort, promoting healthy posture and long, uninterrupted sleep cycles.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Community Centered</h4>
                    <p className="text-muted-foreground">
                      By keeping our manufacturing local, we create essential skilled jobs and support our immediate community. When you buy a Cosmo Bed, you aren't just buying furniture; you are sustaining local livelihoods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us / Factory Address Section */}
      <section id="visit-us" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Feel Free to Visit Our Factory
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    We believe in complete transparency and love showing our customers exactly how their beds are made. You are more than welcome to come and see our craftsmen in action.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8">
                    Feel free to visit our factory floor, test out different mattress firmness levels, see the quality of our raw materials up close, and witness the dedication poured into every single stitch. Let us help you find the absolute perfect match for your home.
                  </p>

                  <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary mt-1">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">Factory Location</h4>
                        <p className="text-xl font-bold text-foreground">147 BASHEWA ROAD</p>
                        <p className="text-lg text-muted-foreground">BASHEWA, Bapsfontein</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-4">
                  <img
                    src={IMG_0056_2}
                    alt="Wooden bases and mattress storage"
                    className="rounded-2xl w-full h-64 object-cover shadow-md"
                  />
                  <img
                    src={IMG_0301}
                    alt="Craftsman precision cutting fabric"
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
            {/* Subtle background pattern/overlay could go here */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Ready for Better, Authentic Sleep?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Discover the comfort that only comes from a Cosmo bed—hand-built with care, heavy-duty materials, and unmatched expertise. Upgrade your sleep experience today.
              </p>
              <Link to="/shop">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-background text-foreground hover:bg-background/90 text-lg px-8 py-6 h-auto rounded-full"
                >
                  Shop The Collection
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