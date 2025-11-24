type Props = {
  params: Promise<{ id: string }>;
};

export default async function OrderDetailPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Order #{id}</h1>
      <p className="text-zinc-500">Order details will go here.</p>
    </div>
  );
}
