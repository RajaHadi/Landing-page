import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="bg-[#080C15] text-[#CD292A]"><h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans pt-2">RAJAs BURGER POINT</h1></nav>
      <div className="w-full bg-[#080C15] h-full ">
        <div className="flex flex-col flex-wrap md:flex-row justify-center p-10 ">
          <div className="pl-10 md:w-6/12 w-full h-auto flex flex-col justify-center  ">
          
            <h1 className="md:text-5xl text-2xl text-white pb-10 font-extrabold">
              Wake up your 
              taste buds with
              this <p className="text-[#CD292A]"> juicy bite</p>
            </h1>
            <p className="mt-6 font-serif text-white">Freshly Made Juicy Burgers That Will Satisfy Your <br />Hunger Today</p>
            <Link href={"/menu"}><button className="rounded-3xl mt-10 bg-[#CD292A] text-white w-40 py-2 p-3">Menu</button></Link>

          </div>
          <div className="md:w-6/12 w-full flex justify-center items-center h-auto">
          <Image src={"/burger (1).png"} alt="burger" width={1000} height={1000}  className="w-[800px] h-[600px] "/> </div>
        </div>
      </div>
    </>
  );
}
