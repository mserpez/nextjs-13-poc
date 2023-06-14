import Image from "next/image";
import Link from "next/link";

/*
Next, we’ll create a Server Component that prefetches the query and passes the 
prefetched data to the list-users.tsx component.
When the Server Component renders, calls to useQuery nested inside the <Hydrate> 
Client Component will have access to the prefetched data that is provided in the state property.
*/

export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: any[] = await response.json();

  return (
    <div className="flex items-center justify-center p-24">
      {data.map((user) => (
        <div className="m-2" key={user.id}>
          <Link href={`/admin/users/${user.id}`} className="text-sm">
            {user.username}
          </Link>
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
            alt={user.name}
            height={150}
            width={150}
          />
        </div>
      ))}
    </div>
  );
}
