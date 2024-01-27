import { ContentSwitcher, Switch } from "@carbon/react";
import ImageHolder from "./ImageHolder";
import honolulu from '../assets/images/Honolulu.jpg'
import london from '../assets/images/London.jpeg'
import './switcherImage.css'

export default function SwitcherImage() {
    return(
        <div className="comp-holder">
            <div className="switch-image-holder">
                <ImageHolder title='Honolulu' picture={honolulu} />
                <ImageHolder title='London' picture={london} />
            </div>
            <ContentSwitcher 
              onChange={(obj) => {
                let { index, name, text } = obj;
                alert(`index: ${index} ||  name: ${name} || text: ${text}`);
              }}>
              <Switch name="locations" text="Our Offices" />
              <Switch name="development" text="Development" />
              <Switch name="community" text="Community" />
            </ContentSwitcher>
        </div>
    )
}