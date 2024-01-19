import './ImageHolder.css'

export default function ImageHolder(title, imageFile) {
    return (
        <div className="img-holder">
            <img src={imageFile} alt={title} />
            <h1>{title}</h1>
        </div>
    )
}