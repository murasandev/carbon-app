import { Button } from "@carbon/react";
import './Sidebar.css'

export default function Hello() {
    return(
        <div className="sidebar-holder">
            
            <div className="button-holder">
                <Button kind="danger">
                    Documentation
                </Button>
                <Button kind="danger">
                    Feedback
                </Button>
                <Button kind="danger">
                    FAQ
                </Button>
                <Button kind="danger">
                    Road Map
                </Button>
                <Button kind="danger">
                    Live Chat
                </Button>
            </div>
        </div>
    )
}