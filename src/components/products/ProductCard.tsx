import { Link } from 'react-router-dom';
import { Product, formatPrice } from '@/data/products';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-white p-6 flex items-center justify-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
        />
        {product.newArrival && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-sm z-10">
            NEW
          </span>
        )}

        {/* Quick Actions Hover Overlay */}
        <div className="absolute inset-0 bg-foreground/5 backdrop-blur-[2px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
          <Link to={`/product/${product.slug}`}>
            <Button variant="secondary" className="shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">
          {product.category}
        </p>

        <Link to={`/product/${product.slug}`}>
          <h3 className="font-bold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>

        <div className="flex items-end justify-between pt-4 border-t border-border mt-auto">
          <div>
            <p className="text-xs text-muted-foreground mb-0.5 font-medium">
              Starting from
            </p>
            <span className="text-xl font-extrabold text-foreground">
              {formatPrice(product.priceRange.min)}
            </span>
          </div>

          <Link to={`/product/${product.slug}`}>
            <Button size="icon" className="rounded-full w-10 h-10 shadow-sm hover:shadow-md transition-all">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;