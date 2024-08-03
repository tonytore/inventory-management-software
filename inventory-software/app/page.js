import Link from "next/link";


export default function Home() {
  return (
   <div className="flex justify-center items-center min-h-screen flex-col">
      <h2 className="font-bold text-2xl">Inventory Management System</h2>
      <Link href='/app/home/overview'>Dashboard</Link>
   </div>
  );
}
