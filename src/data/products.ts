export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDescription: string;
  priceRange: {
    min: number;
    max: number;
  };
  variants: ProductVariant[];
  images: string[];
  featured: boolean;
  newArrival: boolean;
  inStock: boolean;
}

export interface ProductVariant {
  id: string;
  size: string;
  price: number;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

// Import all product images
import imgStazaSupreme from '@/assets/F3BB2645-9351-4DA7-8425-AB74A699D406.jpeg';
import imgRoyalPocket from '@/assets/754AEB63-A68F-493A-B3A0-3D2AB3999E06.jpeg';
import imgCosmosSupreme from '@/assets/789C8823-43CA-4CA9-9708-7083B8AAABD7.jpeg';
import imgHercules from '@/assets/AFDD38B3-F25C-440A-8671-26F317B4FC59.jpeg';
import imgSuperDream from '@/assets/B1425A9A-AF1C-4DDA-BEFB-0812C9493DF9.jpeg';
import imgWhiteBase from '@/assets/DF7FC2B7-22C9-4FC2-A702-F10B61C13FB1.jpeg';
import imgDreamweaver from '@/assets/687F2ABD-7957-4B62-9573-2F3582CA7A30.jpeg';
import imgBrownBaseSq from '@/assets/F847A5E9-D152-4A73-90B3-856E18C766E4.png';
import imgBrownBaseLg from '@/assets/199DAF13-E7E6-4178-9860-A24F558C9406.png';

export const categories: Category[] = [
  {
    id: "1",
    name: "Beds",
    slug: "beds",
    description: "Complete bed frames and headboards",
    image: imgStazaSupreme,
  },
  {
    id: "2",
    name: "Base Sets",
    slug: "base-sets",
    description: "Complete base and mattress combinations",
    image: imgRoyalPocket,
  },
  {
    id: "3",
    name: "Base Only",
    slug: "base-only",
    description: "Quality bed bases sold separately",
    image: imgBrownBaseSq,
  },
  {
    id: "4",
    name: "Mattress Only",
    slug: "mattress-only",
    description: "Premium mattresses for ultimate comfort",
    image: imgHercules,
  },
];

export const products: Product[] = [
  // --- HERCULES (5 LAYER HIGH DENSITY FOAM) ---
  {
    id: "herc-set",
    name: "Hercules Base Set",
    slug: "hercules-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "20 Year Service Warranty & 2 Years Guarantee. 5 Layer High Density Foam. XL at 10% extra to standard length.",
    shortDescription: "5 Layer High Density Foam Base Set.",
    priceRange: { min: 5710, max: 10900 },
    variants: [
      { id: "herc-set-s", size: "Single", price: 5710, inStock: true },
      { id: "herc-set-34", size: "3/4", price: 6400, inStock: true },
      { id: "herc-set-d", size: "Double", price: 7900, inStock: true },
      { id: "herc-set-q", size: "Queen", price: 8620, inStock: true },
      { id: "herc-set-k", size: "King", price: 10900, inStock: true },
    ],
    images: [imgHercules],
    featured: true, newArrival: false, inStock: true,
  },
  {
    id: "herc-mat",
    name: "Hercules Mattress Only",
    slug: "hercules-mattress-only",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "20 Year Service Warranty & 2 Years Guarantee. 5 Layer High Density Foam. XL at 10% extra to standard length.",
    shortDescription: "5 Layer High Density Foam Mattress.",
    priceRange: { min: 4110, max: 7700 },
    variants: [
      { id: "herc-mat-s", size: "Single", price: 4110, inStock: true },
      { id: "herc-mat-34", size: "3/4", price: 4720, inStock: true },
      { id: "herc-mat-d", size: "Double", price: 6060, inStock: true },
      { id: "herc-mat-q", size: "Queen", price: 6590, inStock: true },
      { id: "herc-mat-k", size: "King", price: 7700, inStock: true },
    ],
    images: [imgHercules],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "herc-base",
    name: "Hercules Base Only",
    slug: "hercules-base-only",
    category: "Base Only",
    categorySlug: "base-only",
    description: "Durable foundation base. 20 Year Service Warranty & 2 Years Guarantee. XL at 10% extra to standard length.",
    shortDescription: "Premium bed base.",
    priceRange: { min: 1600, max: 3200 },
    variants: [
      { id: "herc-base-s", size: "Single", price: 1600, inStock: true },
      { id: "herc-base-34", size: "3/4", price: 1680, inStock: true },
      { id: "herc-base-d", size: "Double", price: 1840, inStock: true },
      { id: "herc-base-q", size: "Queen", price: 2030, inStock: true },
      { id: "herc-base-k", size: "King", price: 3200, inStock: true },
    ],
    images: [imgWhiteBase],
    featured: false, newArrival: false, inStock: true,
  },

  // --- SUPER DREAMWEAVER NO TURN (WITH PILLOW TOP) ---
  {
    id: "sdream-set",
    name: "Super Dreamweaver No Turn Base Set",
    slug: "super-dreamweaver-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "20 Year Service Warranty & 2 Years Guarantee. No turn with pillow top. XL at 10% extra to standard length.",
    shortDescription: "No turn mattress with pillow top base set.",
    priceRange: { min: 4600, max: 8760 },
    variants: [
      { id: "sdream-set-s", size: "Single", price: 4600, inStock: true },
      { id: "sdream-set-34", size: "3/4", price: 5140, inStock: true },
      { id: "sdream-set-d", size: "Double", price: 6200, inStock: true },
      { id: "sdream-set-q", size: "Queen", price: 6930, inStock: true },
      { id: "sdream-set-k", size: "King", price: 8760, inStock: true },
    ],
    images: [imgSuperDream],
    featured: true, newArrival: true, inStock: true,
  },
  {
    id: "sdream-mat",
    name: "Super Dreamweaver No Turn Mattress Only",
    slug: "super-dreamweaver-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "20 Year Service Warranty & 2 Years Guarantee. No turn with pillow top. XL at 10% extra to standard length.",
    shortDescription: "No turn mattress with pillow top.",
    priceRange: { min: 3400, max: 6300 },
    variants: [
      { id: "sdream-mat-s", size: "Single", price: 3400, inStock: true },
      { id: "sdream-mat-34", size: "3/4", price: 3800, inStock: true },
      { id: "sdream-mat-d", size: "Double", price: 4800, inStock: true },
      { id: "sdream-mat-q", size: "Queen", price: 5330, inStock: true },
      { id: "sdream-mat-k", size: "King", price: 6300, inStock: true },
    ],
    images: [imgSuperDream],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "sdream-base",
    name: "Super Dreamweaver Base Only",
    slug: "super-dreamweaver-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "Durable foundation base. 20 Year Service Warranty & 2 Years Guarantee. XL at 10% extra to standard length.",
    shortDescription: "Premium dark bed base.",
    priceRange: { min: 1200, max: 2460 },
    variants: [
      { id: "sdream-base-s", size: "Single", price: 1200, inStock: true },
      { id: "sdream-base-34", size: "3/4", price: 1340, inStock: true },
      { id: "sdream-base-d", size: "Double", price: 1400, inStock: true },
      { id: "sdream-base-q", size: "Queen", price: 1600, inStock: true },
      { id: "sdream-base-k", size: "King", price: 2460, inStock: true },
    ],
    images: [imgBrownBaseSq],
    featured: false, newArrival: false, inStock: true,
  },

  // --- DREAMWEAVER (5 LAYER DENSITY FOAM) ---
  {
    id: "dream-set",
    name: "Dreamweaver Base Set",
    slug: "dreamweaver-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "20 Year Service Warranty & 2 Years Guarantee. 5 Layer Density Foam. XL at 10% extra to standard length.",
    shortDescription: "5 Layer Density Foam Base Set.",
    priceRange: { min: 4580, max: 8860 },
    variants: [
      { id: "dream-set-s", size: "Single", price: 4580, inStock: true },
      { id: "dream-set-34", size: "3/4", price: 5100, inStock: true },
      { id: "dream-set-d", size: "Double", price: 6180, inStock: true },
      { id: "dream-set-q", size: "Queen", price: 6840, inStock: true },
      { id: "dream-set-k", size: "King", price: 8860, inStock: true },
    ],
    images: [imgDreamweaver],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "dream-mat",
    name: "Dreamweaver Mattress Only",
    slug: "dreamweaver-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "20 Year Service Warranty & 2 Years Guarantee. 5 Layer Density Foam. XL at 10% extra to standard length.",
    shortDescription: "5 Layer Density Foam Mattress.",
    priceRange: { min: 3350, max: 6200 },
    variants: [
      { id: "dream-mat-s", size: "Single", price: 3350, inStock: true },
      { id: "dream-mat-34", size: "3/4", price: 3840, inStock: true },
      { id: "dream-mat-d", size: "Double", price: 4850, inStock: true },
      { id: "dream-mat-q", size: "Queen", price: 5200, inStock: true },
      { id: "dream-mat-k", size: "King", price: 6200, inStock: true },
    ],
    images: [imgDreamweaver],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "dream-base",
    name: "Dreamweaver Base Only",
    slug: "dreamweaver-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "Durable foundation base. 20 Year Service Warranty & 2 Years Guarantee. XL at 10% extra to standard length.",
    shortDescription: "Premium dark bed base.",
    priceRange: { min: 1230, max: 2660 },
    variants: [
      { id: "dream-base-s", size: "Single", price: 1230, inStock: true },
      { id: "dream-base-34", size: "3/4", price: 1260, inStock: true },
      { id: "dream-base-d", size: "Double", price: 1330, inStock: true },
      { id: "dream-base-q", size: "Queen", price: 1640, inStock: true },
      { id: "dream-base-k", size: "King", price: 2660, inStock: true },
    ],
    images: [imgBrownBaseLg],
    featured: false, newArrival: false, inStock: true,
  },

  // --- COSMOS SUPREME - TURNABLE ---
  {
    id: "cosmos-set",
    name: "Cosmos Supreme Turnable Base Set",
    slug: "cosmos-supreme-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "20 Year Service Warranty & 2 Years Guarantee. Turnable design for extended longevity. XL at 10% extra to standard length.",
    shortDescription: "Turnable Cosmos Supreme Base Set.",
    priceRange: { min: 4450, max: 8510 },
    variants: [
      { id: "cosmos-set-s", size: "Single", price: 4450, inStock: true },
      { id: "cosmos-set-34", size: "3/4", price: 4930, inStock: true },
      { id: "cosmos-set-d", size: "Double", price: 6070, inStock: true },
      { id: "cosmos-set-q", size: "Queen", price: 6770, inStock: true },
      { id: "cosmos-set-k", size: "King", price: 8510, inStock: true },
    ],
    images: [imgCosmosSupreme],
    featured: true, newArrival: false, inStock: true,
  },
  {
    id: "cosmos-mat",
    name: "Cosmos Supreme Turnable Mattress Only",
    slug: "cosmos-supreme-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "20 Year Service Warranty & 2 Years Guarantee. Turnable design. XL at 10% extra to standard length.",
    shortDescription: "Turnable Cosmos Supreme Mattress.",
    priceRange: { min: 3440, max: 6490 },
    variants: [
      { id: "cosmos-mat-s", size: "Single", price: 3440, inStock: true },
      { id: "cosmos-mat-34", size: "3/4", price: 3820, inStock: true },
      { id: "cosmos-mat-d", size: "Double", price: 4820, inStock: true },
      { id: "cosmos-mat-q", size: "Queen", price: 5360, inStock: true },
      { id: "cosmos-mat-k", size: "King", price: 6490, inStock: true },
    ],
    images: [imgCosmosSupreme],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "cosmos-base",
    name: "Cosmos Supreme Base Only",
    slug: "cosmos-supreme-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "Durable foundation base. 20 Year Service Warranty & 2 Years Guarantee. XL at 10% extra to standard length.",
    shortDescription: "Premium Cosmos Supreme Base.",
    priceRange: { min: 1007, max: 1793 },
    variants: [
      { id: "cosmos-base-s", size: "Single", price: 1007, inStock: true },
      { id: "cosmos-base-34", size: "3/4", price: 1108, inStock: true },
      { id: "cosmos-base-d", size: "Double", price: 1252, inStock: true },
      { id: "cosmos-base-q", size: "Queen", price: 1408, inStock: true },
      { id: "cosmos-base-k", size: "King", price: 1793, inStock: true },
    ],
    images: [imgBrownBaseSq],
    featured: false, newArrival: false, inStock: true,
  },

  // --- STAZA SUPREME ---
  {
    id: "staza-sup-set",
    name: "Staza Supreme Base Set",
    slug: "staza-supreme-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "20 Year Service Warranty & 2 Years Guarantee. Premium support and comfort. XL at 10% extra to standard length.",
    shortDescription: "Staza Supreme Base Set.",
    priceRange: { min: 5260, max: 10130 },
    variants: [
      { id: "staza-sup-set-s", size: "Single", price: 5260, inStock: true },
      { id: "staza-sup-set-34", size: "3/4", price: 5890, inStock: true },
      { id: "staza-sup-set-d", size: "Double", price: 7290, inStock: true },
      { id: "staza-sup-set-q", size: "Queen", price: 8070, inStock: true },
      { id: "staza-sup-set-k", size: "King", price: 10130, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: true, newArrival: true, inStock: true,
  },
  {
    id: "staza-sup-mat",
    name: "Staza Supreme Mattress Only",
    slug: "staza-supreme-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "20 Year Service Warranty & 2 Years Guarantee. Premium support and comfort. XL at 10% extra to standard length.",
    shortDescription: "Staza Supreme Mattress.",
    priceRange: { min: 4260, max: 8110 },
    variants: [
      { id: "staza-sup-mat-s", size: "Single", price: 4260, inStock: true },
      { id: "staza-sup-mat-34", size: "3/4", price: 4780, inStock: true },
      { id: "staza-sup-mat-d", size: "Double", price: 6040, inStock: true },
      { id: "staza-sup-mat-q", size: "Queen", price: 6660, inStock: true },
      { id: "staza-sup-mat-k", size: "King", price: 8110, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "staza-sup-base",
    name: "Staza Supreme Base Only",
    slug: "staza-supreme-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "Durable foundation base. 20 Year Service Warranty & 2 Years Guarantee. XL at 10% extra to standard length.",
    shortDescription: "Staza Supreme bed base.",
    priceRange: { min: 1007, max: 2014 },
    variants: [
      { id: "staza-sup-base-s", size: "Single", price: 1007, inStock: true },
      { id: "staza-sup-base-34", size: "3/4", price: 1108, inStock: true },
      { id: "staza-sup-base-d", size: "Double", price: 1252, inStock: true },
      { id: "staza-sup-base-q", size: "Queen", price: 1408, inStock: true },
      { id: "staza-sup-base-k", size: "King", price: 2014, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },

  // --- ROYAL POCKET SPRING AND CABINET BASE ---
  {
    id: "royal-set",
    name: "Royal Pocket Spring & Cabinet Base Set",
    slug: "royal-pocket-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "25 Years Warrantee and 2 Years Guarantee. Ultimate luxury pocket spring with firm cabinet base. XL at 10% extra to standard length.",
    shortDescription: "Luxury pocket spring set with cabinet base.",
    priceRange: { min: 8370, max: 14010 },
    variants: [
      { id: "royal-set-s", size: "Single", price: 8370, inStock: true },
      { id: "royal-set-34", size: "3/4", price: 9280, inStock: true },
      { id: "royal-set-d", size: "Double", price: 10150, inStock: true },
      { id: "royal-set-q", size: "Queen", price: 11740, inStock: true },
      { id: "royal-set-k", size: "King", price: 14010, inStock: true },
    ],
    images: [imgRoyalPocket],
    featured: true, newArrival: true, inStock: true,
  },
  {
    id: "royal-mat",
    name: "Royal Pocket Spring Mattress Only",
    slug: "royal-pocket-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "25 Years Warrantee and 2 Years Guarantee. Ultimate luxury pocket spring mattress. XL at 10% extra to standard length.",
    shortDescription: "Luxury pocket spring mattress.",
    priceRange: { min: 5710, max: 9690 },
    variants: [
      { id: "royal-mat-s", size: "Single", price: 5710, inStock: true },
      { id: "royal-mat-34", size: "3/4", price: 7320, inStock: true },
      { id: "royal-mat-d", size: "Double", price: 8570, inStock: true },
      { id: "royal-mat-q", size: "Queen", price: 8720, inStock: true },
      { id: "royal-mat-k", size: "King", price: 9690, inStock: true },
    ],
    images: [imgRoyalPocket],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "royal-base",
    name: "Royal Cabinet Base Only",
    slug: "royal-cabinet-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "25 Years Warrantee and 2 Years Guarantee. Firm and durable luxury cabinet base. XL at 10% extra to standard length.",
    shortDescription: "Luxury cabinet bed base.",
    priceRange: { min: 1580, max: 4320 },
    variants: [
      { id: "royal-base-s", size: "Single", price: 2660, inStock: true },
      { id: "royal-base-34", size: "3/4", price: 1960, inStock: true },
      { id: "royal-base-d", size: "Double", price: 1580, inStock: true },
      { id: "royal-base-q", size: "Queen", price: 3020, inStock: true },
      { id: "royal-base-k", size: "King", price: 4320, inStock: true },
    ],
    images: [imgRoyalPocket],
    featured: false, newArrival: false, inStock: true,
  },

  // --- STAZA DREAMER NO TURN ---
  {
    id: "staza-dream-noturn-set",
    name: "Staza Dreamer No Turn Base Set",
    slug: "staza-dreamer-noturn-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "10 Year Service Warranty & 2 Years Guarantee. Low maintenance no turn design.",
    shortDescription: "Convenient no-turn base set.",
    priceRange: { min: 1900, max: 2670 },
    variants: [
      { id: "sd-noturn-set-s", size: "Single", price: 1900, inStock: true },
      { id: "sd-noturn-set-34", size: "3/4", price: 2260, inStock: true },
      { id: "sd-noturn-set-d", size: "Double", price: 2670, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "staza-dream-noturn-mat",
    name: "Staza Dreamer No Turn Mattress",
    slug: "staza-dreamer-noturn-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "10 Year Service Warranty & 2 Years Guarantee. Low maintenance no turn design.",
    shortDescription: "Convenient no-turn mattress.",
    priceRange: { min: 1190, max: 1690 },
    variants: [
      { id: "sd-noturn-mat-s", size: "Single", price: 1190, inStock: true },
      { id: "sd-noturn-mat-34", size: "3/4", price: 1390, inStock: true },
      { id: "sd-noturn-mat-d", size: "Double", price: 1690, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },

  // --- STAZA DREAMER TURN ---
  {
    id: "staza-dream-turn-set",
    name: "Staza Dreamer Turn Base Set",
    slug: "staza-dreamer-turn-base-set",
    category: "Base Sets",
    categorySlug: "base-sets",
    description: "10 Year Service Warranty & 2 Years Guarantee. Turnable mattress base set for even wear.",
    shortDescription: "Turnable Staza Dreamer set.",
    priceRange: { min: 2230, max: 3100 },
    variants: [
      { id: "sd-turn-set-s", size: "Single", price: 2230, inStock: true },
      { id: "sd-turn-set-34", size: "3/4", price: 2530, inStock: true },
      { id: "sd-turn-set-d", size: "Double", price: 3100, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },
  {
    id: "staza-dream-turn-mat",
    name: "Staza Dreamer Turn Mattress",
    slug: "staza-dreamer-turn-mattress",
    category: "Mattress Only",
    categorySlug: "mattress-only",
    description: "10 Year Service Warranty & 2 Years Guarantee. Turnable mattress for even wear.",
    shortDescription: "Turnable Staza Dreamer mattress.",
    priceRange: { min: 1430, max: 2040 },
    variants: [
      { id: "sd-turn-mat-s", size: "Single", price: 1430, inStock: true },
      { id: "sd-turn-mat-34", size: "3/4", price: 1670, inStock: true },
      { id: "sd-turn-mat-d", size: "Double", price: 2040, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  },

  // --- SHARED STAZA DREAMER BASE ONLY ---
  {
    id: "staza-dream-base",
    name: "Staza Dreamer Base Only",
    slug: "staza-dreamer-base",
    category: "Base Only",
    categorySlug: "base-only",
    description: "10 Year Service Warranty & 2 Years Guarantee. Quality foundation for your Staza mattress.",
    shortDescription: "Staza Dreamer bed base.",
    priceRange: { min: 800, max: 980 },
    variants: [
      { id: "sd-base-s", size: "Single", price: 800, inStock: true },
      { id: "sd-base-34", size: "3/4", price: 870, inStock: true },
      { id: "sd-base-d", size: "Double", price: 980, inStock: true },
    ],
    images: [imgStazaSupreme],
    featured: false, newArrival: false, inStock: true,
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};