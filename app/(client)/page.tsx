import { Hero } from '@/components/client/home/hero';
import { FeaturedProducts } from '@/components/client/home/featured-products';
import { CategoryGrid } from '@/components/client/home/category-grid';
import { Newsletter } from '@/components/client/home/newsletter';

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
