import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Lerato M.",
    role: "Verified Buyer",
    content: "The best sleep I've had in years. The quality of the Cosmo Luxury Suite is comparable to international brands but at a much better price.",
    rating: 5
  },
  {
    name: "Sipho D.",
    role: "Verified Buyer",
    content: "Excellent service from start to finish. Being a local factory, they really care about their customers. Highly recommended!",
    rating: 5
  },
  {
    name: "Thabo K.",
    role: "Verified Buyer",
    content: "Supporting a 100% Black-owned business that actually delivers premium quality feels great. The delivery was on time too.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Join thousands of happy South Africans sleeping better on Cosmo Beds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 italic">"{t.content}"</p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;