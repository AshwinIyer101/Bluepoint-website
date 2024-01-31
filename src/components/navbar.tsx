import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import Logo from './Logo'
import { buttonVariants } from './ui/button'


const Navbar = () => {
    const user = null

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/*TODO make mobile menu */}
                            <div className="m'l-4 flex lg:ml-0">
                                <Link href="/">
                                    <Logo />
                                </Link>
                            </div>
                            {/*<div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <Navitems />
                            </div>*/}
                            <div className="ml-auto flex  items-center">
                                <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-end lg:space-x-6 ">  
                                <div className="ml-4 flow-root lg:ml-6 text-primary">
                                    <Link
                                            href="/dot"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}
                                        >
                                            Dot
                                        </Link>
                                    </div>                                
                                <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                            href="/about-us"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}
                                        >
                                            About us
                                        </Link>
                                    </div>
                                    <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                            href="/services"
                                            className={buttonVariants({
                                                variant: 'ghost',
                                            })}
                                        >
                                            Services
                                        </Link>
                                    </div>
                                    <div className="ml-4 flow-root lg:ml-6">
                                    <Link
                                            href="/contact-us"
                                            className={buttonVariants({
                                                variant: 'default',
                                            })}
                                        >
                                            Get in touch
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar
