import Link from "next/link";

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="text-zinc-500 mb-8">Your cart is empty.</div>
      <Link
        href="/checkout"
        className="rounded-full bg-foreground px-6 py-3 text-background font-medium hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
