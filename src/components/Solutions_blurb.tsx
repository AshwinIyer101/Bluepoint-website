import Image from "next/image"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import Link from "next/link"
import { buttonVariants } from "./ui/button"
import { ArrowBigRight, ArrowRight, Ghost } from "lucide-react"
//TODO: CHANGE BLURBS TO LOOK BETTER ON MOBILE AND SMALL SCREENS

const HomeBlurb = () => {
    return (
        <ResizablePanelGroup
      direction="horizontal"
      className=" w-full rounded-lg "

    >
      <ResizablePanel >
        <div className="flex h-full items-center justify-center p-6">
          <Image src="/Colored_neural_network.svg.png" alt="neural network diagram" width={300} height={1}/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={15}>
            <div className="flex h-full items-center justify-center p-6 border-b">
              <span className="font-semibold lg:text-2xl md:text-xl sm:text-lg">
                Solutions that make sense
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={85} >
            <div className="flex flex-col justify-evenly items-center h-full p-6 ">
              <span className=" font-normal text-center lg:text-xl md:text-lg sm:text-base">
                Every industry has different uses for AI, from sales accelerator programs for real estate companies to 
                knowledge management LLMs for universities, we help companies find and implement these 
                solutions to enhance the things they care about.
              </span>
              <Link className={['justify-end','lg:text-lg', 'md:text-base', 'sm:text-sm', 'text-primary',  buttonVariants({variant: 'ghost', size: 'lg'})].join(' ')} href='/services' >
                See what we do <ArrowRight />
              </Link>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    )
}

export default HomeBlurb