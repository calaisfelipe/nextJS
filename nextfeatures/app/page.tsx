import Link from "next/link";

export default async function Home() {
  return (
    <main className="grid min-h-screen place-content-center bg-gray-200 gap-2">
      <h2 className="text-5xl text-black text-center w-full">Home</h2>

      <Link href="/products?showDialog=y" className="text-2xl hover:underline">
        Go to Products with modal
      </Link>
      <Link href="/products" className="text-2xl hover:underline">
        Go to Products without modal
      </Link>
    </main>
  );
}
