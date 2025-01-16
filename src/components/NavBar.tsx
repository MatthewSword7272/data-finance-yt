export default function NavBar() {
    return (
        <>
            <nav className={'hidden md:block'}>
                <ul className={'flex gap-10'}>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}
