type Props = {
  params: Promise<{ id: string }>;
};

export default async function CustomerDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Customer {id}</h1>
      <p className="text-zinc-500">Customer details will go here.</p>
    </div>
  );
}
