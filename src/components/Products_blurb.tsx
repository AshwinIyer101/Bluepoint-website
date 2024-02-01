import Image from "next/image"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { ArrowBigRight, ArrowRight, Ghost } from "lucide-react"
//TODO: CHANGE BLURBS TO LOOK BETTER ON MOBILE AND SMALL SCREENS

const ProductsBlurb = () => {
    return (
        <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg"
    >
      
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical" className="h-full">
          <ResizablePanel defaultSize={15}>
            <div className="flex h-full items-center justify-center p-6 border-b">
              <span className="font-semibold lg:text-2xl md:text-xl sm:text-lg">
                Products fit to function
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={85} >
            <div className="flex flex-col justify-evenly items-center h-full p-6 ">
              <span className=" font-normal text-center lg:text-xl md:text-lg sm:text-base">
              We leverage our experience with companies to create products addressing real 
              problems. Our flagship product, Dot, harnesses Large Language Models (LLMs) 
              for privacy-focused users. Dot provides a direct, personal-like interface 
              with your documents, regardless of database size, 
              operating entirely on-device to ensure your data&apos;s privacy.              
              </span>
              <Link className={['justify-end','lg:text-lg', 'md:text-base', 'sm:text-sm', 'text-primary',  buttonVariants({variant: 'ghost', size: 'lg'})].join(' ')} href='/dot' >
                Try Dot now <ArrowRight />
              </Link>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6 py-32">
          <Image src="/Dot_logo.png" alt="Dot logo" width={300} height={300}/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
    )
}

export default ProductsBlurb