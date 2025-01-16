import Logo from './Logo'
import MobileNavBar from './MobileNavBar'
import NavBar from './NavBar'

export default function Header() {
    return (
        <div className={'flex absolute w-full justify-between items-center h-24 px-10'}>
            <Logo />
            <NavBar />
            <MobileNavBar />
        </div>
    )
}
