import { Link } from 'react-router-dom';
import { Category } from '@/data/products';
import bedImage from '@/assets/bedshop.jpg';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/shop?category=${category.slug}`}
      className="group relative aspect-[4/3] rounded-xl overflow-hidden hover-lift"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold text-background mb-1">{category.name}</h3>
        <p className="text-sm text-background/80">{category.description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
