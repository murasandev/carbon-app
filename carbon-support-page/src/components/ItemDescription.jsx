import './RoadMap.css'
import { Button } from "@carbon/react";

let defaultText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa nobis dolorum explicabo? Necessitatibus quas at, facilis enim doloribus provident? Esse, dolorum officia natus ratione reiciendis iusto quidem quaerat maxime alias.'
let buttonDefault = 'Click for More Info'
export default function ItemDescription( {title, description = defaultText, buttonText = buttonDefault }) {
    return (
        <div className='road-map-text-holder'>
            <h1 className='description-title'>{title}</h1>
            {description}
            <Button kind="danger">
                {buttonText}
            </Button>
        </div>
    );
  }