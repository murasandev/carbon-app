import roadmap from '../assets/images/roadmap.webp'
import ItemDescription from './ItemDescription';
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
            <ItemDescription title={'Fundamentals'}/>
        </div>
        
      </div>
    );
  }