import Image from 'next/image'
import NewLogo from '../../public/Logo.svg' // Import new logo

const Logo = () => {
    return (
        <div>
            {/* Other components or content */}
            <Image src={NewLogo} alt="logo" className="h-28 w-28" />
            {/* Other components or content */}
        </div>
    )
}

export default Logo