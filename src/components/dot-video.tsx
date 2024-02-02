"use client"

import { ArrowDownCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

const DotVideo = () => {

    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true); // Trigger the fade-in effect once the component mounts
  }, []);

    return (
       
       
            <div className="mx-auto text-center flex flex-col items-center max-w-3xl h-screen justify-center">
             <div className=" pb-28 flex flex-col items-center">
            <video
        autoPlay
        loop
        muted
        playsInline
        className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadedData={() => setIsLoaded(true)} // Optionally, fade in after the video is loaded
        style={{ width: '100%' }}
      >
        <source src="/dot-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ArrowDownCircleIcon className={` delay-300 size-10 my-14 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} />
      </div>
            </div>
        
        
        
    )
}

export default DotVideo