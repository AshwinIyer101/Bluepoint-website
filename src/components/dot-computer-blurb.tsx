import Image from "next/image"

const DotComputer = () => {
    return (
       <div className="flex sm:flex-col-reverse lg:flex-row-reverse justify-center h-screen align-middle items-center" id="DotComputer">
        <div className=" pt-5">
        <p className=" text-center text-lg">
        Need the power of large language models but don&apos;t want to send away your documents and data? 
        </p>
        <p className=" text-center pt-5 text-lg ">
        <strong>Use Dot</strong>
        </p>
        </div>
        <div>
        <div className="mt-0 lg:mt-0 mx-auto lg:w-4/6">
        <img src="/dot desktop.png" alt="App Image" className="w-full h-auto object-cover" />
      </div>
        </div>

        </div>

       
    )
}

export default DotComputer