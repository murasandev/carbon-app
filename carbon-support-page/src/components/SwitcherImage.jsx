import { ContentSwitcher, Switch } from "@carbon/react";
import ImageHolder from "./ImageHolder";
import honolulu from '../assets/images/Honolulu.jpg'
import london from '../assets/images/London.jpeg'

export default function SwitcherImage() {
    return(
        <div>
            <div className="switch-image-holder">
                <ImageHolder title='hnl' picture={honolulu} />
                <ImageHolder title='lnd' picture={london} />
                <ImageHolder title='lnd' picture={london} />
            </div>
            <ContentSwitcher 
              onChange={(obj) => {
                let { index, name, text } = obj;
                // alert(`index: ${index} ||  name: ${name} || text: ${text}`);
              }}>
              <Switch name="locations" text="Our Offices" />
              <Switch name="tech-support" text="Tech Support" />
              <Switch name="contact" text="Chat Support" />
            </ContentSwitcher>
        </div>
    )
}