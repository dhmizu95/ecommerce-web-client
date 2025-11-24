import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920')] bg-cover bg-center opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Discover Quality Products for Every Lifestyle
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-zinc-300">
            Shop the latest trends in electronics, fashion, home goods, and more.
            Free shipping on orders over $100.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/products">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base bg-transparent border-white text-white hover:bg-white hover:text-zinc-900">
              <Link href="/products?category=electronics">
                View Electronics
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
