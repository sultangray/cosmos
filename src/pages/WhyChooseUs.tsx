import { Truck, ShieldCheck, BadgeCheck, Landmark } from 'lucide-react';
// Using your factory photo showing stacked mattresses ready for bulk delivery
import whyChooseUsImage from '@/assets/IMG_0021.jpeg';

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Commercial Warranty",
    description: "Our hospitality range is backed by comprehensive warranties designed for high-turnover environments."
  },
  {
    icon: <Landmark className="h-8 w-8 text-primary" />,
    title: "Factory-Direct ROI",
    description: "Eliminate retail markups. Secure wholesale pricing directly from our Bapsfontein manufacturing hub."
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    title: "Hotel-Grade Durability",
    description: "Reinforced wooden bases and high-density, anti-sag foams engineered for continuous daily use."
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: "Bulk Logistics",
    description: "Seamless multi-room delivery and installation services across Gauteng for hotels and lodges."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Why Partner with Cosmo Beds?</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                We supply the hospitality industry directly from our factory floor.
                Upgrade your rooms with premium sleep technology while protecting your
                bottom line through our direct B2B pricing model.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((f, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="bg-background w-12 h-12 rounded-lg flex items-center justify-center shadow-sm border border-border">
                      {f.icon}
                    </div>
                    <h4 className="font-bold text-foreground text-lg">{f.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={whyChooseUsImage}
                alt="Bulk commercial bed manufacturing"
                className="rounded-2xl shadow-xl object-cover h-[500px] w-full border-4 border-background"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden md:block shadow-lg">
                <p className="text-3xl font-black">B2B</p>
                <p className="text-sm font-medium mt-1">Direct Manufacturing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;