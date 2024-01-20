import './ImageHolder.css'

export default function ImageHolder({title, picture, size = 100}) {
    return (
        <div className="img-holder">
            <img
                src={picture}
                alt={title}
                height={size + "%"}
                width={size + "%"}
            />
            <div className='box-shadow-image'></div>
            <h1 className='text-on-image'>{title}</h1>
        </div>
    )
}