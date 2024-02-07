import { useState } from 'react';
import { ContentSwitcher, Switch } from "@carbon/react";
import ImageHolder from "./ImageHolder";
import './switcherImage.css'

import honolulu from '../assets/images/Honolulu.jpg'
import london from '../assets/images/London.jpeg'
import frontendImg from '../assets/images/Frontend-Development-Services.png'
import backendImg from '../assets/images/back-end-developer.jpg'
import gitHubImg from '../assets/images/GitHub.jpg'
import stackImg from '../assets/images/stackoverflow.png'

export default function SwitcherImage() {
  const [img1, setImg1] = useState(honolulu);
  const [imgTitle1, setImgTitle1] = useState('Honolulu');

  const [img2, setImg2] = useState(london);
  const [imgTitle2, setImgTitle2] = useState('London');

    return(
        <div className="comp-holder">
            <div className="switch-image-holder" >
                <ImageHolder title={imgTitle1} picture={img1} />
                <ImageHolder title={imgTitle2} picture={img2} />
            </div>
            <ContentSwitcher 
              onChange={(obj) => {
                let { index, name, text } = obj;
                // alert(`index: ${index} ||  name: ${name} || text: ${text}`);
                switch(index){
                  case 0:
                    setImg1(honolulu);
                    setImgTitle1('Honolulu');
                    
                    setImg2(london);
                    setImgTitle2('London');
                    break;
                  case 1:
                    setImg1(frontendImg);
                    setImgTitle1('Front End');
                    
                    setImg2(backendImg);
                    setImgTitle2('Back End');
                    break;
                  case 2:
                    setImg1(gitHubImg);
                    setImgTitle1('GitHub');
                    
                    setImg2(stackImg);
                    setImgTitle2('Stack Overflow');
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

