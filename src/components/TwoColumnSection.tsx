import TextContent from './TextContent'

interface TwoColumnSectionProps {
    className?: string
    image: string
    heading: string
    textOrder?: 'left' | 'right'
    caption?: string
    buttonText?: string
    description: string
}

export default function TwoColumnSection({
    className,
    heading,
    image,
    textOrder = 'right',
    caption,
    description,
    buttonText,
}: TwoColumnSectionProps) {
    const imageOrderClass = textOrder === 'left' ? 'order-2 md:order-1' : 'order-1 md:order-2'
    const textOrderClass = textOrder === 'left' ? 'order-1 md:order-2' : 'order-2 md:order-1'

    return (
        <div className={className}>
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className={`${imageOrderClass} md:w-1/2 w-full`}>
                    <img src={image} alt="" className="aspect-square " />
                </div>
                <div className={`${textOrderClass} md:w-1/2 w-full`}>
                    <TextContent caption={caption} heading={heading} description={description} buttonText={buttonText} />
                </div>
            </div>
        </div>
    )
}
