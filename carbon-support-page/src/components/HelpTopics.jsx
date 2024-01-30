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
                    <div className="help-popular-content-holder">
                        <Button className='help-button' kind="danger">Contact Us</Button>
                        <Button className='help-button' kind="danger">Contact Us</Button>
                        <Button className='help-button' kind="danger">Contact Us</Button>
                        <Button className='help-button' kind="danger">Contact Us</Button>
                    </div>
                    
                    <h1>Front End</h1>
                    <div className="help-popular-content-holder">
                        <Button className='help-button' kind="danger">Browser Compatibility</Button>
                        <Button className='help-button' kind="danger">Mobile Optimizations</Button>
                        <Button className='help-button' kind="danger">Frameworks</Button>
                        <Button className='help-button' kind="danger">Design Systems</Button>
                    </div>

                    <h1>Back End</h1>
                    <div className="help-popular-content-holder">
                        <Button className='help-button' kind="danger">Backend Integration</Button>
                        <Button className='help-button' kind="danger">Performance</Button>
                        <Button className='help-button' kind="danger">Security</Button>
                        <Button className='help-button' kind="danger">Troubleshooting</Button>
                    </div>

                    <h1>Community</h1>
                    <div className="help-popular-content-holder">
                        <Button className='help-button' kind="danger">Stack Overflow</Button>
                        <Button className='help-button' kind="danger">Git Hub</Button>
                        <Button className='help-button' kind="danger">News</Button>
                        <Button className='help-button' kind="danger">Other Forums</Button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}