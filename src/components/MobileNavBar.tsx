import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import Logo from './Logo'
import {useState} from 'react'

export default function MobileNavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={'md:hidden block'}>
            <div className={`fixed top-0 w-[60%] h-full ${isOpen ? 'left-0' : '-left-full'} transition-all duration-200`}>
                <nav className="pl-5 pt-5 space-y-10 w-full h-full border-r border-gray-900 bg-[#000400]">
                    <Logo className="" />
                    <ul className="divide-y-2 uppercase">
                        <li className="p-5 border-gray-600">Home</li>
                        <li className="p-5 border-gray-600">Company</li>
                        <li className="p-5 border-gray-600">Resources</li>
                        <li className="p-5 border-gray-600">About</li>
                        <li className="p-5 border-gray-600">Contact</li>
                    </ul>
                </nav>
            </div>
            <div>
                {isOpen ? (
                    <AiOutlineClose size={20} onClick={() => setIsOpen(false)} />
                ) : (
                    <AiOutlineMenu size={20} onClick={() => setIsOpen(true)} />
                )}
            </div>
        </div>
    )
}
