export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Total Revenue</p>
          <p className="text-2xl font-bold">$0.00</p>
        </div>
        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Orders</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Products</p>
          <p className="text-2xl font-bold">0</p>
        </div>
        <div className="p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500">Customers</p>
          <p className="text-2xl font-bold">0</p>
        </div>
      </div>
    </div>
  );
}
