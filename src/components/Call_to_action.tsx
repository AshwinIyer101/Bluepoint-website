import Link from "next/link"
import { buttonVariants } from "./ui/button"


const Action_call = () => {
    return (
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
            Book a free consultation now
        </h1>
        <p className="py-20 text-xl text-gray-200">
            Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor
        </p>

        <Link href='/contact-us' className={['justify-end','lg:text-lg', 'md:text-base', 'sm:text-sm', 'bg-white', 'text-blue-600',   buttonVariants({variant: 'outline', size: 'lg'})].join(' ')}>
            Get in touch
        </Link>
        </div>
        
    )
}

export default Action_call