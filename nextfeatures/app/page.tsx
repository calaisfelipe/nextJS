import Image from "next/image";
import getBufferedUrl from "@/lib/useBufferedUrl";

export default async function Home() {

  const myBlur = await getBufferedUrl('https://upload.wikimedia.org/wikipedia/commons/5/5f/Rocketlandpage.png')

  return (
    <main className="grid min-h-screen place-content-center bg-gray-500">
      <div className="w-[400px] rounded-md overflow-hidden">
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/5/5f/Rocketlandpage.png'
          alt="coffe"
          priority
          width={1200}
          height={800}
          sizes="400px"
          placeholder="blur"
          blurDataURL={myBlur}
        />
      </div>
    </main>
  );
}
