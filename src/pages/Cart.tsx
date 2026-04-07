import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { formatPrice } from '@/data/products';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, ShieldCheck } from 'lucide-react';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const shippingCost = 500;
  const freeShippingThreshold = 10000;
  const isFreeShipping = totalPrice >= freeShippingThreshold;
  const finalShipping = isFreeShipping ? 0 : shippingCost;
  const finalTotal = totalPrice + finalShipping;

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24">
          <div className="text-center max-w-md mx-auto bg-card p-10 rounded-3xl border border-border shadow-sm">
            <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Looks like you haven't added any items to your cart yet.
              Start shopping and find the perfect bed for your home!
            </p>
            <Link to="/shop">
              <Button size="lg" className="w-full sm:w-auto px-8 rounded-full">
                Start Shopping
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-secondary py-4 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground font-medium">Cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">
          Shopping Cart <span className="text-muted-foreground text-2xl font-medium">({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.variant.id}`}
                className="bg-card rounded-2xl border border-border p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Image */}
                  <Link to={`/product/${item.product.slug}`} className="shrink-0">
                    <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-white p-2 border border-border/50 flex items-center justify-center">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wider">
                          {item.product.category}
                        </p>
                        <Link to={`/product/${item.product.slug}`}>
                          <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors line-clamp-2">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1">
                          Size: <span className="font-medium text-foreground">{item.variant.size}</span>
                        </p>
                      </div>
                      <p className="text-xl font-extrabold text-foreground whitespace-nowrap">
                        {formatPrice(item.variant.price)}
                      </p>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex items-center justify-between mt-6">
                      <div className="flex items-center border border-border rounded-full bg-secondary/50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity - 1)}
                          className="p-2 hover:bg-secondary rounded-l-full transition-colors text-foreground"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-10 text-center font-semibold text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.variant.id, item.quantity + 1)}
                          className="p-2 hover:bg-secondary rounded-r-full transition-colors text-foreground"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id, item.variant.id)}
                        className="flex items-center text-sm font-medium text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="h-4 w-4 mr-1.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 sticky top-24 shadow-lg">
              <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

              {/* Free Shipping Progress */}
              {!isFreeShipping ? (
                <div className="mb-8 p-4 bg-primary/5 border border-primary/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Truck className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-foreground">
                      <span className="text-primary font-bold">{formatPrice(freeShippingThreshold - totalPrice)}</span> away from free shipping!
                    </span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
                      style={{ width: `${Math.min((totalPrice / freeShippingThreshold) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ) : (
                <div className="mb-8 p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3">
                  <div className="bg-green-500 rounded-full p-1.5">
                    <Truck className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-bold text-green-700 dark:text-green-400">
                    Congratulations! You get free shipping.
                  </span>
                </div>
              )}

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-base">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex justify-between text-base">
                  <span className="text-muted-foreground">Shipping (Gauteng)</span>
                  <span className={`font-semibold ${isFreeShipping ? 'text-green-600 dark:text-green-400' : 'text-foreground'}`}>
                    {isFreeShipping ? 'FREE' : formatPrice(shippingCost)}
                  </span>
                </div>

                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total</span>
                    <span className="text-3xl font-black text-primary">
                      {formatPrice(finalTotal)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground text-right mt-1">Includes VAT</p>
                </div>
              </div>

              <div className="space-y-3">
                <Link to="/checkout" className="block">
                  <Button size="lg" className="w-full py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all">
                    Proceed to Checkout
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>

                <Link to="/shop" className="block">
                  <Button variant="outline" size="lg" className="w-full py-6 rounded-xl">
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-green-500" />
                <span>Secure Checkout & Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;