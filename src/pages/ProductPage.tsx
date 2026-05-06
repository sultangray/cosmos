import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { getProductBySlug, products, formatPrice } from '@/data/products';
import { ShoppingCart, Truck, ShieldCheck, Minus, Plus, Check, X } from 'lucide-react';
import { toast } from 'sonner';

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  // Smart related products logic (unchanged)
  const collectionKeyword = product.name.split(' ')[0];

  let relatedProducts = products.filter(
    (p) => p.name.includes(collectionKeyword) && p.id !== product.id
  );

  if (relatedProducts.length < 4) {
    const fallbackProducts = products.filter(
      (p) =>
        p.categorySlug === product.categorySlug &&
        p.id !== product.id &&
        !relatedProducts.some((rp) => rp.id === p.id)
    );
    relatedProducts = [...relatedProducts, ...fallbackProducts];
  }

  relatedProducts = relatedProducts.slice(0, 4);

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart(product, selectedVariant, quantity);
      toast.success(`${product.name} (${selectedVariant.size}) added to cart!`);
    }
  };

  // Effect to handle keyboard close for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsImageViewerOpen(false);
      }
    };
    if (isImageViewerOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isImageViewerOpen]);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/shop" className="text-muted-foreground hover:text-primary">
              Shop
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to={`/shop?category=${product.categorySlug}`}
              className="text-muted-foreground hover:text-primary"
            >
              {product.category}
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium truncate max-w-[200px]">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image Container */}
          <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-white border border-border shadow-sm">
            <img
              src={product.images[0]}
              alt={product.name}
              onClick={() => setIsImageViewerOpen(true)}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 cursor-zoom-in"
              title="Click to view full image in high quality"
            />
          </div>

          {/* Product Details (unchanged) */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-primary font-bold tracking-wider uppercase mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {product.name}
            </h1>

            {/* Price */}
            <div className="mb-8">
              {selectedVariant ? (
                <span className="text-4xl font-black text-primary">
                  {formatPrice(selectedVariant.price)}
                </span>
              ) : (
                <span className="text-4xl font-black text-primary">
                  {formatPrice(product.priceRange.min)} - {formatPrice(product.priceRange.max)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4 text-lg">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-4 rounded-xl border-2 transition-all ${selectedVariant?.id === variant.id
                      ? 'border-primary bg-primary/10 text-primary shadow-sm transform -translate-y-1'
                      : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                      }`}
                  >
                    <span className="font-bold block mb-1 text-left">{variant.size}</span>
                    <span className="block text-sm opacity-80 text-left">
                      {formatPrice(variant.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Cart row */}
            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex items-center border-2 border-border rounded-xl bg-background">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-4 hover:bg-secondary transition-colors rounded-l-xl"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-6 font-bold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-4 hover:bg-secondary transition-colors rounded-r-xl"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>

              <Button
                variant="cart"
                size="xl"
                onClick={handleAddToCart}
                className="flex-1 h-14 rounded-xl text-lg shadow-lg hover:shadow-primary/25 transition-all"
              >
                <ShoppingCart className="h-6 w-6 mr-3" />
                Add to Cart
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-6 p-8 bg-secondary/50 rounded-2xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="bg-background p-2 rounded-lg shadow-sm">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">R500 Shipping in Gauteng</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-background p-2 rounded-lg shadow-sm">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Commercial Warranty</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-background p-2 rounded-lg shadow-sm">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">Hospitality Grade</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-background p-2 rounded-lg shadow-sm">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <span className="font-medium">SA Manufactured</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products (unchanged) */}
        {relatedProducts.length > 0 && (
          <section className="mt-24 pt-12 border-t border-border">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl font-bold text-foreground">Complete The Setup</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* --- High Quality Full Image Viewer Modal --- */}
      {isImageViewerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsImageViewerOpen(false)}
        >
          {/* Close button with accessibility label */}
          <button
            onClick={() => setIsImageViewerOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-primary rounded-full p-2 bg-black/50 hover:bg-black/80 transition-colors z-[60]"
            aria-label="Close full image view"
          >
            <X className="h-8 w-8" />
          </button>

          <img
            src={product.images[0]}
            alt={`${product.name} (full high quality view)`}
            className="max-w-full max-h-full object-contain drop-shadow-xl animate-zoom-in"
            onClick={(e) => e.stopPropagation()} // Stop overlay click closing on image click
          />
        </div>
      )}
    </Layout>
  );
};

export default ProductPage;