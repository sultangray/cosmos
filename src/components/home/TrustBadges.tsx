import { ShieldCheck, Truck, Award, RefreshCw } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: ShieldCheck,
      title: 'Secure Payment',
      description: 'Your payment is 100% secure',
    },
    {
      icon: RefreshCw,
      title: 'Money Back Guarantee',
      description: '30-day return policy',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'R500 shipping in Gauteng',
    },
    {
      icon: Award,
      title: 'Proudly South African',
      description: '100% locally manufactured',
    },
  ];

  return (
    <section className="py-12 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-1">{badge.title}</h4>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
