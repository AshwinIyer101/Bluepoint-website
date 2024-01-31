import Image from "next/image"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable"


const HomeBlurb = () => {
    return (
        <ResizablePanelGroup
      direction="horizontal"
      className=" w-full rounded-lg border"

    >
      <ResizablePanel >
        <div className="flex h-[200px] items-center justify-center p-6">
          <Image src="/@/public/Colored_neural_network.svg.png" alt="neural network diagram" width={200} height={200}/>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel >
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
    )
}

export default HomeBlurb