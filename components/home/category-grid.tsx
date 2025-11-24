import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { categories } from '@/data/products';

export function CategoryGrid() {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Shop by Category</h2>
          <p className="text-muted-foreground mt-2">
            Find exactly what you&apos;re looking for
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
            >
              <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-md transition-all">
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <Image
                    src={category.image || '/placeholder.jpg'}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg text-center px-2">
                      {category.name}
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
