interface LogoProps {
    className?: string
}

export default function Logo({className}: LogoProps) {
    return (
        <div className={className}>
            <h1 className="w-full text-3xl font-bold text-[#00df9a]">React App</h1>
        </div>
    )
}
