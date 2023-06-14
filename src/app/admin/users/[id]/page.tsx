interface UserProps {
  params: {
    id: string;
  };
}

// DEMO: Dynamic Routes
export default async function Page({ params }: UserProps) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data: any = await response.json();

  return (
    <div className="flex justify-center p-24">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
