import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              100% Black Owned,
              <br />
              Proudly South African
            </h2>
            <p className="text-muted-foreground mb-4">
              Cosmo Beds & Bedding Factory is a 100% Black owned South African manufacturing 
              business committed to producing high-quality beds and bedding that families can 
              trust.
            </p>
            <p className="text-muted-foreground mb-8">
              Our mission is to deliver durable, comfortable, and affordable beds while 
              supporting local craftsmanship and creating jobs in our community. Every bed 
              we make is a testament to our commitment to quality and excellence.
            </p>
            <Link to="/about">
              <Button variant="default" size="lg">
                Read Our Full Story
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <h4 className="text-3xl font-bold text-primary mb-2">10+</h4>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <h4 className="text-3xl font-bold text-primary mb-2">1000+</h4>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <h4 className="text-3xl font-bold text-primary mb-2">100%</h4>
                  <p className="text-sm text-muted-foreground">South African Made</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <h4 className="text-3xl font-bold text-primary mb-2">30</h4>
                  <p className="text-sm text-muted-foreground">Day Guarantee</p>
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
