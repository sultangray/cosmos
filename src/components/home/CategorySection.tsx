import { categories } from '@/data/products';
import CategoryCard from '@/components/products/CategoryCard';
import { ShieldCheck } from 'lucide-react';

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <ShieldCheck className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hospitality & B2B Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Browse our specialized selection of heavy-duty beds, durable mattresses,
            and reinforced base sets engineered for high-turnover environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;