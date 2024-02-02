import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CircleDollarSign, LibrarySquare, LineChart } from "lucide-react";
import HomeBlurb from "@/components/Solutions_blurb"; 
import ProductsBlurb from "@/components/Products_blurb";
import Action_call from "@/components/Call_to_action";
import ProductsMobileBlurb from "@/components/Products_mobile_blurb";
import SolutionsMobileBlurb from "@/components/Solutions_mobile_blurb";

const perks = [
  {
    name: "Automated quotes",
    Icon: ArrowDownToLine,
    description: "No back and forth emailing or wating for quotes, procurement for your company done completely online"
  },
  {
    name: "Minimum market prices",
    Icon: CircleDollarSign,
    description: "We negotiate with distributors to always give you the best possible price on the market"
  },
  {
    name: "Complete transparancy",
    Icon: LineChart,
    description: "Current and historic prices for every material, so you always know if your paying the right price"
  },
  {
    name: "Extensive catalogue",
    Icon: LibrarySquare,
    description: "We connect with distributors all across the UK to provide the largest catalog of raw materials available"
  },
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
     
    <span className="text-primary">Artificial intelligence software</span>
    {' '}to keep businesses ahead
    </h1>
    <p className="mt-6 text-large max-w-prose text-muted-foreground"> 
    Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor
    </p>
    <div className="flex flex-col sm:flex-row gap-4 mt-6">
      <Link href="/contact-us" className={buttonVariants()}>
        Contact us
      </Link>
      <Link href="/services" className={buttonVariants({
                                                    variant: 'ghost',
                                                })}>
        What we do
      </Link>
    </div>
    </div>


    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-col-3 lg:gap-x-8 l:gap-y-0">
      {perks.map((perk) => (
        <div 
        key={perk.name} 
        className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
            {<perk.Icon className='w-1/3 h-1/3' />}
            </div>
          </div>
          <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
          <h3 className="text-base font-medium text-gray-900">
            {perk.name}
          </h3>
          <p className="mt-3 text-sm text-muted-foreground">
          {perk.description}
          </p>
          </div>

        </div>
      ))}
      </div>
    </MaxWidthWrapper>
    </section>
    <section className="hidden md:flex md:flex-col">
    
    <MaxWidthWrapper className="py-20">
    <HomeBlurb /> 
    </MaxWidthWrapper>
    
    <MaxWidthWrapper className="py-20">
    <ProductsBlurb /> 
    </MaxWidthWrapper>
 
    </section>

    <section className='sm:flex sm:flex-col md:hidden'>
      <MaxWidthWrapper className="pt-15 ">
        <SolutionsMobileBlurb />
      </MaxWidthWrapper>

      <MaxWidthWrapper className="pb-20 pt-5">
        <ProductsMobileBlurb />
      </MaxWidthWrapper>

      
    </section>

    <section className="bg-primary">
      <MaxWidthWrapper className="py-20">
      <Action_call />
      </MaxWidthWrapper>
    </section>
    </>
  );
}