import { Hero } from '@/components/home/hero';
import { FeaturedProducts } from '@/components/home/featured-products';
import { CategoryGrid } from '@/components/home/category-grid';
import { Newsletter } from '@/components/home/newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <CategoryGrid />
      <Newsletter />
    </>
  );
}
