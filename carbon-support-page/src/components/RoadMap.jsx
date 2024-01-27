import roadmap from '../assets/images/roadmap.webp'
import './RoadMap.css'
import { Button } from "@carbon/react";

export default function RoadMap() {
    return (
      <div className="road-map-holder">
        <h1>Road Map</h1>
        <div className="road-map-content">
            <img
                src={roadmap}
                alt={'Road Map'}
                // height={size + "%"}
                // width={size + "%"}
            />
            <div className='road-map-text-holder'>
                <h1 className='description-title'>Fundamentals</h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consequuntur atque ipsa esse praesentium iusto totam explicabo quos earum? Dolorum aliquid officiis, doloremque et molestiae voluptate nostrum a. Vero, ullam!
                <Button kind="danger">
                    Documentation
                </Button>
            </div>
        </div>
        
      </div>
    );
  }