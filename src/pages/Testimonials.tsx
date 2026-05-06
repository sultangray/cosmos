import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Boutique Hotel Manager",
    content: "Since switching to Cosmo Beds, our guest sleep scores have skyrocketed. The durability of their commercial range is outstanding, and buying direct saved us thousands on our refit.",
    rating: 5
  },
  {
    name: "David L.",
    role: "Airbnb Superhost Portfolio",
    content: "I furnish all 12 of my Airbnb properties with Cosmo Beds. They hold up incredibly well to constant guest turnover, and the wholesale pricing allows me to offer luxury comfort on a strict budget.",
    rating: 5
  },
  {
    name: "Grace T.",
    role: "Lodge Procurement Officer",
    content: "A fantastic 100% Black-owned partner. Their bulk logistics were flawless, delivering and installing 50 units across our resort seamlessly. The build quality is phenomenal.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Industry Trusted</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Hospitality Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See why property managers and hotel owners across Gauteng rely on Cosmo Beds for their guests.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-md hover:shadow-lg transition-shadow relative group">
              <Quote className="h-10 w-10 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
              <div className="flex mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-8 text-lg leading-relaxed">"{t.content}"</p>
              <div className="border-t border-border pt-4 mt-auto">
                <p className="font-bold text-foreground text-lg">{t.name}</p>
                <p className="text-sm font-medium text-primary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;