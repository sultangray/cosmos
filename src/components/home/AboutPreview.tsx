import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Commercial Sleep Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              100% Black Owned,
              <br />
              Proudly South African
            </h2>
            <p className="text-muted-foreground mb-4">
              Cosmo Beds & Bedding Factory is a specialized commercial manufacturer
              committed to supplying hotels, guesthouses, and Airbnbs with
              industrial-strength comfort.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to deliver highly durable, guest-approved beds while
              supporting local craftsmanship. Every commercial bed we produce is engineered
              for high-turnover environments to maximize your establishment's ROI.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Read Our B2B Story
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-6 shadow-lg border border-border/50">
                  <h4 className="text-3xl font-bold text-primary mb-2">10+</h4>
                  <p className="text-sm font-medium text-muted-foreground">Years in Manufacturing</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg border border-border/50">
                  <h4 className="text-3xl font-bold text-primary mb-2">500+</h4>
                  <p className="text-sm font-medium text-muted-foreground">Hospitality Partners</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background rounded-xl p-6 shadow-lg border border-border/50">
                  <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm font-medium text-muted-foreground">Locally Sourced & Built</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg border border-border/50">
                  <Building2 className="h-8 w-8 text-primary mb-3" />
                  <p className="text-sm font-medium text-muted-foreground">Commercial Warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;