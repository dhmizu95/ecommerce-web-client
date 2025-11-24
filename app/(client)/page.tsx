import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to Exom
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
          Discover amazing products at great prices.
        </p>
        <div className="mt-10">
          <Link
            href="/products"
            className="rounded-full bg-foreground px-6 py-3 text-background font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
