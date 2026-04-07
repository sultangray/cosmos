import { Truck, ShieldCheck, MapPin, BadgeCheck } from 'lucide-react';
import whyChooseUsImage from '@/assets/whyus.jpg';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Factory Warranty",
    description: "Every bed comes with a comprehensive factory warranty for your peace of mind."
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Fast Delivery",
    description: "We deliver across Gauteng and surrounding areas directly from our factory floor."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Proudly Local",
    description: "100% South African manufactured, supporting local jobs and our community."
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Premium Materials",
    description: "We use high-density foam and tempered steel springs for maximum durability."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Choose Cosmo Beds?</h2>
              <p className="text-muted-foreground mb-8">
                We cut out the middleman. By buying directly from our factory, you get premium 
                sleep technology without the retail markup. Quality craftsmanship meets 
                South African heart.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="bg-background w-12 h-12 rounded-lg flex items-center justify-center shadow-sm">
                      {f.icon}
                    </div>
                    <h4 className="font-semibold text-foreground">{f.title}</h4>
                    <p className="text-sm text-muted-foreground">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src={whyChooseUsImage} 
                alt="Quality Bed Manufacturing" 
                className="rounded-2xl shadow-xl object-cover h-[400px] w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl hidden md:block">
                <p className="text-2xl font-bold">10+ Years</p>
                <p className="text-sm">Of Manufacturing Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;