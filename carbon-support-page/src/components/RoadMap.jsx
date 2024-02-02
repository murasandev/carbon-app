import roadmap from '../assets/images/roadmap.webp'
import ItemDescription from './ItemDescription';
import './RoadMap.css'

let fundamentalsText = 'The most important skills to have when starting in Front-End Development are HTML, CSS, and JavaScript. These are the bare basic needs for getting started with Front-End Development.'
let intermediateText = 'Understand how the internet works, how clients and servers interact, the Domain Name Server (DNS), and the components of a website, such as code files and assets.'
let advancedText ='Learn about technologies such as REST, SOAP, Asynchronous JavaScript and XML (AJAX), Cross-Origin Resource Sharing (CORS), and others that are required when a client interacts with a server.'
export default function RoadMap() {
    return (
      <div id='roadmapID' className="road-map-holder">
        <div className="road-map-content">
            <div className="road-map-image-holder">
                <h1>Road Map</h1>
                <img
                    className='road-map-image'
                    src={roadmap}
                    alt={'Road Map'}
                    // height={size + "%"}
                    // width={size + "%"}
                />
            </div>
            <div className="road-map-item-holder">
                <ItemDescription title={'Fundamentals'} description={fundamentalsText}/>
                <ItemDescription title={'Intermediate Topics'} description={intermediateText}/>
                <ItemDescription title={'Advanced Topics'} description={advancedText}/>
            </div>
            
        </div>
        
      </div>
    );
  }