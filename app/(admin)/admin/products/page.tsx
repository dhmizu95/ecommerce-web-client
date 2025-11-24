import Link from "next/link";

export default function AdminProductsPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link
          href="/admin/products/new"
          className="rounded-lg bg-foreground px-4 py-2 text-background font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
        >
          Add Product
        </Link>
      </div>
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg">
        <p className="p-8 text-center text-zinc-500">No products yet.</p>
      </div>
    </div>
  );
}
