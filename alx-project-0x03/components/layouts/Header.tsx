import Link from "next/link";
import Button from "@/components/common/Button"

const Header: React.FC = () => {
    return (
        <header className='fixed w-full bg-white shadow-md'>
            <div className="container mx-auto flex justify-betweeen items-center py-6 px-4 md:px-8">
                 <Link href='/' className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                   Splash App
                 </Link>
                 
                    <div className="flex gap-4">
                        <Button buttonLabel="Sign In"
                            buttonBackgroundColor="red" />
                        <Button buttonLabel="Sign Up"
                            buttonBackgroundColor="blue" />
                    </div>
            </div>
        </header>
    )
}

export default Header;