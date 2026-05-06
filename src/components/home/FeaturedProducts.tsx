import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 4);

  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Building2 className="h-8 w-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Featured Commercial Range
              </h2>
            </div>
            <p className="text-muted-foreground text-lg">
              Our most durable, high-performance beds trusted by hotels and Airbnbs.
            </p>
          </div>
          <Link to="/shop">
            <Button variant="outline" size="lg" className="rounded-full">
              View Full Catalogue
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;