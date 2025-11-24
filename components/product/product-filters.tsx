'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
  { value: 'name-desc', label: 'Name: Z to A' },
  { value: 'rating', label: 'Highest Rated' },
];

const priceRanges = [
  { value: '0-50', label: 'Under $50' },
  { value: '50-100', label: '$50 - $100' },
  { value: '100-200', label: '$100 - $200' },
  { value: '200-500', label: '$200 - $500' },
  { value: '500', label: 'Over $500' },
];

interface FilterContentProps {
  currentCategory: string;
  currentPrice: string;
  currentSort: string;
  hasActiveFilters: boolean;
  updateFilter: (key: string, value: string) => void;
  clearFilters: () => void;
}

function FilterContent({
  currentCategory,
  currentPrice,
  currentSort,
  hasActiveFilters,
  updateFilter,
  clearFilters,
}: FilterContentProps) {
  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <Label className="text-sm font-medium">Category</Label>
        <Select
          value={currentCategory}
          onValueChange={(value) => updateFilter('category', value)}
        >
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.slug}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range Filter */}
      <div>
        <Label className="text-sm font-medium">Price Range</Label>
        <Select
          value={currentPrice}
          onValueChange={(value) => updateFilter('price', value)}
        >
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Any Price" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Price</SelectItem>
            {priceRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Sort */}
      <div>
        <Label className="text-sm font-medium">Sort By</Label>
        <Select
          value={currentSort}
          onValueChange={(value) => updateFilter('sort', value)}
        >
          <SelectTrigger className="mt-2">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearFilters} className="w-full">
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        </>
      )}
    </div>
  );
}

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get('category') || 'all';
  const currentSort = searchParams.get('sort') || 'newest';
  const currentPrice = searchParams.get('price') || 'all';
  const currentSearch = searchParams.get('search') || '';

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/products?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/products');
  };

  const hasActiveFilters = (currentCategory && currentCategory !== 'all') || (currentPrice && currentPrice !== 'all') || currentSearch;

  const filterProps = {
    currentCategory,
    currentPrice,
    currentSort,
    hasActiveFilters: !!hasActiveFilters,
    updateFilter,
    clearFilters,
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {currentSearch && (
            <Badge variant="secondary" className="gap-1">
              Search: {currentSearch}
              <button onClick={() => updateFilter('search', '')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
          {currentCategory && (
            <Badge variant="secondary" className="gap-1">
              {categories.find((c) => c.slug === currentCategory)?.name}
              <button onClick={() => updateFilter('category', '')}>
                <X className="h-3 w-3" />
              </button>
            </Badge>
          )}
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent {...filterProps} />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Filters Sidebar */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h2 className="font-semibold mb-4">Filters</h2>
          <FilterContent {...filterProps} />
        </div>
      </aside>
    </>
  );
}
