import { Suspense } from 'react';
import { ProductFilters } from '@/components/client/product/product-filters';
import { ProductGrid } from '@/components/client/product/product-grid';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { products, categories } from '@/data/products';
import type { Product } from '@/types';

interface ProductsPageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
    price?: string;
  }>;
}

function filterProducts(
  allProducts: Product[],
  params: {
    category?: string;
    search?: string;
    sort?: string;
    price?: string;
  }
): Product[] {
  let filtered = [...allProducts];

  // Filter by search
  if (params.search) {
    const query = params.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Filter by category
  if (params.category) {
    filtered = filtered.filter((p) => p.category.slug === params.category);
  }

  // Filter by price range
  if (params.price) {
    const [min, max] = params.price.split('-').map(Number);
    if (max) {
      filtered = filtered.filter((p) => p.price >= min && p.price <= max);
    } else {
      filtered = filtered.filter((p) => p.price >= min);
    }
  }

  // Sort
  switch (params.sort) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      filtered.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'rating':
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case 'newest':
    default:
      filtered.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
  }

  return filtered;
}

function ProductsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-square w-full" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      ))}
    </div>
  );
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const filteredProducts = filterProducts(products, params);

  const categoryName = params.category
    ? categories.find((c) => c.slug === params.category)?.name
    : null;

  const pageTitle = params.search
    ? `Search results for "${params.search}"`
    : categoryName
    ? categoryName
    : 'All Products';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {categoryName ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{categoryName}</BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>Products</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        <p className="text-muted-foreground mt-1">
          {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
        </p>
      </div>

      <div className="lg:flex lg:gap-8">
        <Suspense fallback={null}>
          <ProductFilters />
        </Suspense>

        <div className="flex-1">
          <Suspense fallback={<ProductsLoading />}>
            <ProductGrid products={filteredProducts} columns={3} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
