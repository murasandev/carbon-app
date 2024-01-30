import { Button } from "@carbon/react";
import './Sidebar.css'

export default function Hello() {
    return(
        <div className="sidebar-holder">
            
            <div className="button-holder">
                <Button className="sidebar-button" kind="danger">
                    Documentation
                </Button>
                <Button className="sidebar-button" kind="danger">
                    Questions
                </Button>
                <Button className="sidebar-button" kind="danger">
                    FAQ
                </Button>
                <Button className="sidebar-button" kind="danger">
                    Road Map
                </Button>
                <Button className="sidebar-button" kind="danger">
                    Live Chat
                </Button>
            </div>
        </div>
    )
}