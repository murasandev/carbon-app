import { Button } from "@carbon/react";
import './HelpTopics.css'
export default function HelpTopics() {
    return(
        <div>
            <div className="help-topics-content-holder">
                <div className="help-topics-faq">
                    <h1>FAQ </h1>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                    <Button className='faq-button' kind="danger">Contact Us</Button>
                </div>
                <div className="help-topics-popular-content">
                    <h1>Popular Searches </h1>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <h1>Front End Topics</h1>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <h1>Back End Topics</h1>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <h1>Learning</h1>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                    <Button kind="danger">Contact Us</Button>
                </div>
                
            </div>
            
        </div>
    );
}