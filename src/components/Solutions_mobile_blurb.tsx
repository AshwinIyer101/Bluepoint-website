import Image from "next/image"
import { Panel } from "react-resizable-panels"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "./ui/button"


const SolutionsMobileBlurb = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex h-full items-center justify-center p-6 py-32">
            <Image src="/Colored_neural_network.svg.png" alt="neural network diagram" width={300} height={300}/>
            </div>
            
            <div className="flex justify-center">
            <ResizablePanelGroup
            direction="vertical"
            className="min-h-[300px] max-w-md rounded-lg"
            >
            <ResizablePanel defaultSize={15}>
                <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold lg:text-2xl md:text-xl sm:text-lg">Solutions that make sense</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={85}>
                <div className="flex flex-col h-full items-center justify-center p-6">
                <span className="font-normal text-center lg:text-xl md:text-lg sm:text-base">Every industry has different uses for AI, from sales accelerator programs for real estate companies to 
                knowledge management LLMs for universities, we help companies find and implement these 
                solutions to enhance the things they care about.</span>
                <Link className={['justify-end','lg:text-lg', 'md:text-base', 'sm:text-sm', 'text-primary',  buttonVariants({variant: 'ghost', size: 'lg'})].join(' ')} href='/services' >
                See what we do <ArrowRight />
              </Link>
                </div>
            </ResizablePanel>
            </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default SolutionsMobileBlurb