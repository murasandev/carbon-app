import { ContentSwitcher, Switch } from "@carbon/react";
import ImageHolder from "./ImageHolder";
import honolulu from '../assets/images/Honolulu.jpg'
import london from '../assets/images/London.jpeg'
import './switcherImage.css'

let imgTitle1 = '123';
let img1;

function CategorySelect(index){
  switch(index) {
    case 0:
      imgTitle1 = 'Honolulu';
      alert(index);
      break;
    case 1:
      alert(index);
      imgTitle1 = 'Honolulu2';
      break;
    case 2:
      alert(index);
      break;
  }
}

export default function SwitcherImage() {
    return(
        <div className="comp-holder">
          
            <div className="switch-image-holder" >
                <ImageHolder title={imgTitle1} picture={honolulu} />
                <ImageHolder title='London' picture={london} />
            </div>
            <ContentSwitcher 
              onChange={(obj) => {
                let { index, name, text } = obj;
                alert(`index: ${index} ||  name: ${name} || text: ${text}`);
                switch(index){
                  case 0:
                    CategorySelect(index);
                    break;
                  case 1:
                    CategorySelect(index);
                    break;
                  case 2:
                    CategorySelect(index);
                    break;
                }
              }}>
              <Switch name="locations" text="Our Offices" />
              <Switch name="development" text="Development" />
              <Switch name="community" text="Community" />
            </ContentSwitcher>
        </div>
    )
}

